import {Router} from "express";

const webhookRouter = Router();

webhookRouter.post('/clerk', (req, res) => {
    console.log(req.body);
    res.json({message: 'Webhook received', body: req.body});
})
export default webhookRouter;