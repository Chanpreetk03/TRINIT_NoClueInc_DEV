import {Router} from "express";

const healthRouter = Router();
healthRouter.get('/', (_req, res) => {
    const data = {
        uptime: process.uptime(), // Number of seconds the Node.js process has been running
        message: 'Ok',
        date: new Date() // Current date and time
    };

    res.status(200).send(data);
});

export default healthRouter;