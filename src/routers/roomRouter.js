import express from 'express';

import { room } from '../controllers/roomController';

const homeRouter = express.Router();

homeRouter.get('/:name', room);

export default homeRouter;
