import { BASE_URL } from '../config/app.config';
import { CategoryI } from '../types/category.type';

export const createCategory = async (category: string): Promise<Response> => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ name: category }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCategories = async (): Promise<CategoryI[]> => {
  const response = await fetch(`${BASE_URL}/categories`);
  const { data } = await response.json();

  return data;
};
