import {PrismaClient} from "@prisma/client";
import {response, Router} from "express";
import {StatusCodes} from "http-status-codes";

const webhookRouter = Router();

const prisma = new PrismaClient();
webhookRouter.post('/clerk', async (req, res) => {

    const body = req.body;
    try {
        let response = null;
        switch (body.type) {
            case 'user.created': {
                response = await prisma.user.create({
                    data: {
                        id: body.data.id as string,
                        name: body.data.username as string,
                        type: (body.data.unsafe_metadata.role || '')
                    }
                })
                break;
            }
            case 'user.deleted': {
                response = await prisma.user.delete({
                    where: {
                        id: body.data.id as string
                    }
                })
                break;
            }

            case 'user.updated': {
                response = await prisma.user.update({
                    where: {
                        id: body.data.id as string
                    },
                    data: {
                        name: body.data.username as string,
                        type: (body.data.unsafe_metadata.role || '')
                    }
                })
                break;
            }
        }
        res.json({message: `${body.type} successfully`, body: response});
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: e.name, message: e.message, body: e});
    }
})
export default webhookRouter;