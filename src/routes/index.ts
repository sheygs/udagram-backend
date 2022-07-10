import { Router } from 'express';
import { baseRoute } from '../middlewares/index';
import imageFilterRouter from '../routes/image-filter';

const indexRouter = Router();

indexRouter.get('/', baseRoute);
indexRouter.use('/', imageFilterRouter);

export default indexRouter;
