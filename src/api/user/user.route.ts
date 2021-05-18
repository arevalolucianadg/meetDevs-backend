import { Router } from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from './user.controller';
import { validateToken } from '../../middlewares/authToken';
import { validateRole } from '../../middlewares/validateRole';

const userRouter: Router = Router();


userRouter.get('/', getUsers);

userRouter.get('/:id', validateToken, getUser);

userRouter.post('/', validateRole, createUser);

userRouter.put('/:id', validateToken, updateUser);

userRouter.delete('/:id', validateToken, deleteUser);

export default userRouter;
