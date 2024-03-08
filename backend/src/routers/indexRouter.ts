import {Router} from 'express';
import jetValidator from 'jet-validator';
import testRoute from "@src/routers/routes/testRoute";

// **** Variables **** //

const indexRouter = Router(),
    validate = jetValidator();

indexRouter.get('/', (_req, res) => {
    res.status(200).json({message: 'Server is running'});
});

// ** Add health route ** //

indexRouter.get('/health', (_req, res) => {
    const data = {
        uptime: process.uptime(), // Number of seconds the Node.js process has been running
        message: 'Ok',
        date: new Date() // Current date and time
    };

    res.status(200).send(data);
});

indexRouter.use('/test', testRoute);

// **** Export default **** //

export default indexRouter;
