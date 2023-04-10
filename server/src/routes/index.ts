import Router from 'express';

import categoryRouter from './category.route';

const router = Router();

router.use('/categories', categoryRouter);

export default router;
