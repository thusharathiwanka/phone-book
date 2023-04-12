import { Router } from 'express';

import {
  deleteCategory,
  getCategories,
  saveCategory,
} from '../controllers/category.controller';

const router = Router();

router.get('/', getCategories);
router.post('/', saveCategory);
router.delete('/:id', deleteCategory);

export default router;
