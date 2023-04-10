import { Router } from 'express';

import {
  getCategories,
  saveCategory,
} from '../controllers/category.controller';

const router = Router();

router.get('/', getCategories);
router.post('/', saveCategory);

export default router;
