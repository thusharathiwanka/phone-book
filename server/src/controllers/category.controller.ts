import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

import {
  getCategoriesService,
  saveCategoryService,
} from '../services/category.service';

export const saveCategory: any = async (req: Request, res: Response) => {
  try {
    const data = await saveCategoryService(req.body);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'Unable to create category' });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export const getCategories: any = async (req: Request, res: Response) => {
  try {
    const data = await getCategoriesService();

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No categories found' });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(404).json({ error });
  }
};
