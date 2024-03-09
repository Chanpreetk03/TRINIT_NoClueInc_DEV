import {Router} from "express";
import {PrismaClient} from "@prisma/client";

const userRouter = Router();

const prisma = new PrismaClient();

userRouter.get('/getUsers', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

userRouter.get('/getUser', async (req, res) => {
    const userId: string = req.body.userId || '';
    const user = await prisma.user.findUnique({where: {id: userId}});
    res.json(user);
});

userRouter.post('/createUser', async (req, res) => {
    const {userId, name, type} = req.body;
    try {
        const user = await prisma.user.create({data: {id: userId, name, type}});
        res.json({message: 'User created successfully', user: user});
    } catch (e) {
        res.status(500).json({message: 'Error creating user', error: e});
    }
});

export default userRouter;