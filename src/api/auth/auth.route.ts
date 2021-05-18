import { Router } from 'express';
import { loginController, authController } from './auth.controller';

const authRouter: Router = Router();


authRouter.post('/', authController );

authRouter.post('/login', loginController);

export default authRouter;
