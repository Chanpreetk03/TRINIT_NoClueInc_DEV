import {Router} from "express";
import {PrismaClient} from "@prisma/client";

const testRouter = Router();

const prisma = new PrismaClient();
testRouter.get('/', async (_req, res, next) => {
    const users = await prisma.user.findMany();
    res.send(users);
})

export default testRouter;