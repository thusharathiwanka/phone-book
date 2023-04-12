import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

import {
  deleteCategoryService,
  getCategoriesService,
  getCategoryService,
  saveCategoryService,
  updateCategoryService,
} from '../services/category.service';

export const saveCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const data = await saveCategoryService(req.body);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'Unable to create category' });
    }

    return res.status(201).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const data = await getCategoriesService();

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const data = await getCategoryService(id);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const data = await updateCategoryService(id, name);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  try {
    const data = await deleteCategoryService(id);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};
