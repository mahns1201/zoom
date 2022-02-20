import express from 'express';

import { home } from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.get('/', home);

export default homeRouter;
