/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import express, {NextFunction, Request, Response} from 'express';

import indexRouter from '@src/routers/indexRouter';

import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {ClerkExpressRequireAuth, RequireAuthProp, StrictAuthProp} from "@clerk/clerk-sdk-node";
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

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(StatusCodes.UNAUTHORIZED).json({
        error: ReasonPhrases.UNAUTHORIZED,
        message: 'You must be authenticated to access this resource.'
    });
});

// **** Export default **** //

export default app;
