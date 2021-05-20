import { Router } from 'express';

import authRouter from './auth/auth.route';
import userRouter from './user/user.route';
import eventRouter from './event/event.route';
import uploadsRouter from './uploads/uploads.route';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/events', eventRouter);
router.use('/uploads', uploadsRouter);

export default router;
