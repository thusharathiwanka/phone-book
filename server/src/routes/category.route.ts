import { Router } from 'express';

import {
  deleteCategory,
  getCategories,
  getCategory,
  saveCategory,
  updateCategory,
} from '../controllers/category.controller';

const router = Router();

router.get('/', getCategories);
router.post('/', saveCategory);
router.get('/:id', getCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
