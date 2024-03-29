/**
 * Setup express server.
 */

import morgan from 'morgan';
import express, {NextFunction, Request, Response} from 'express';

import indexRouter from '@src/routers/indexRouter';

import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {RequireAuthProp, StrictAuthProp} from "@clerk/clerk-sdk-node";
import 'dotenv/config'
import cors from "cors";

// **** Variables **** //

const app = express();


// **** Setup **** //

declare global {
    namespace Express {
        interface Request extends StrictAuthProp {
        }
    }
}

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: '*'}))

// Show routers called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// Add APIs, must be after middleware
app.use('/v1', indexRouter);


app.get('/', (_: RequireAuthProp<Request>, res: Response) => {
    return res.json({message: "Server is running"});
});

interface ResponseError extends Error {
    status: number;
}

// Add error handler
app.use((err: ResponseError, _: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    if (err.status === undefined) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            error: ReasonPhrases.UNAUTHORIZED,
            message: "Unauthorized access",
        });
    } else {
        res.status(err.status).json({
            error: err.name,
            message: err.message,
        });
    }
});

// **** Export default **** //

export default app;
