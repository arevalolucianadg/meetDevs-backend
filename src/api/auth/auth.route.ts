import { Router } from 'express';
import { loginController, authController } from './auth.controller';

const authRouter: Router = Router();


authRouter.post('/login', loginController);
authRouter.post('/', authController );

export default authRouter;
