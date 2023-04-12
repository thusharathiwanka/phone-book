import Router from 'express';

import categoryRouter from './category.route';
import contactRouter from './contact.route';

const router = Router();

router.use('/categories', categoryRouter);
router.use('/contacts', contactRouter);

export default router;
