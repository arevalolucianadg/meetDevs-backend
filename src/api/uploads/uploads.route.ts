import { Router } from 'express';

import { uploadImage } from './uploads.controller';
import { validateToken } from '../../middlewares/authToken';

const uploadsRouter: Router = Router();

uploadsRouter.put('/:collection/:id', validateToken, uploadImage);

export default uploadsRouter;