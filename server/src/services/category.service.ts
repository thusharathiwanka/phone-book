import { categoryBody } from 'types/category.type';
import Category from '../models/category.model';

export const saveCategoryService = async (newCategoryBody: categoryBody) => {
  try {
    const newCategory = new Category(newCategoryBody);
    return await newCategory.save();
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getCategoriesService = async () => {
  try {
    return await Category.find();
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
