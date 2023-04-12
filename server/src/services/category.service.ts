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

export const getCategoriesService = async (): Promise<Document[] | null> => {
  try {
    return await Category.find();
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getCategoryService = async (
  id: string
): Promise<Document | null> => {
  try {
    return await Category.findById(id);
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const updateCategoryService = async (
  id: string,
  name: string
): Promise<Document | null> => {
  try {
    return await Category.findByIdAndUpdate(id, { name }, { new: true });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteCategoryService = async (
  id: string
): Promise<Document | null> => {
  try {
    return await Category.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
