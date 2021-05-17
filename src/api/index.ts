import { Router } from 'express';

import userRouter from './user/user.route';

const router: Router = Router();

router.use('/users', userRouter);

export default router;
