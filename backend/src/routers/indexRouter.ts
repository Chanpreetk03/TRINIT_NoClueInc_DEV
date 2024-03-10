import {Router} from 'express';
import jetValidator from 'jet-validator';
import testRouter from "@src/routers/routes/testRoute";
import healthRouter from "@src/routers/routes/healthRoute";
import userRouter from "@src/routers/routes/userRoute";
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node";
import webhookRouter from "@src/routers/routes/webhookRoute";

// **** Variables **** //

const indexRouter = Router(),
    validate = jetValidator();

indexRouter.get('/', (_req, res) => {
    res.status(200).json({message: 'Server is running'});
});


indexRouter.use('/health', healthRouter);
indexRouter.use('/test', testRouter);
indexRouter.use('/user',
    // ClerkExpressRequireAuth(),
    userRouter)
indexRouter.use('/webhook', webhookRouter);
// **** Export default **** //

export default indexRouter;
