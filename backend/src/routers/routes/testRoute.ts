import {NextFunction, Request, Response, Router} from "express";
import {PrismaClient} from "@prisma/client";
import {ClerkExpressRequireAuth} from "@clerk/clerk-sdk-node";
import {ReasonPhrases, StatusCodes} from "http-status-codes";
import app from "@src/server";

const testRouter = Router();

const prisma = new PrismaClient();
testRouter.get('/', ClerkExpressRequireAuth(), async (_req, res, next) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

export default testRouter;