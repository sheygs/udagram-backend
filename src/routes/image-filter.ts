import { Router } from 'express';
import ImageFilterController from '../controllers/index';

const router = Router();

router.route('/filteredImage').get(ImageFilterController);

export default router;
