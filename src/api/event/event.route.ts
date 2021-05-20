import { Router } from 'express';

import { validateToken } from '../../middlewares/authToken';
import { createEvent, getEvents, getEvent, updateEvent, deleteEvent, createAttende } from './event.controller';

const eventRouter: Router = Router();

eventRouter.get('/', getEvents);
eventRouter.get('/:id', getEvent);
eventRouter.post('/', validateToken, createEvent);
eventRouter.put('/:id', validateToken, updateEvent);
eventRouter.delete('/:id', validateToken, deleteEvent);

eventRouter.put('/assistance/:eventId', validateToken, createAttende);

export default eventRouter;