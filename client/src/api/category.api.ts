import { BASE_URL } from '../config/app.config';
import { CategoryI } from '../types/category.type';

export const createCategory = async (name: string): Promise<Response> => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCategories = async (): Promise<CategoryI[]> => {
  const response = await fetch(`${BASE_URL}/categories`);
  return await response.json();
};

export const getCategory = async (id: string): Promise<CategoryI> => {
  const response = await fetch(`${BASE_URL}/categories/${id}`);
  return await response.json();
};

export const updateCategory = async (
  id: string,
  name: string
): Promise<CategoryI> => {
  const response = await fetch(`${BASE_URL}/categories/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const deleteCategory = async (id: string): Promise<CategoryI> => {
  const response = await fetch(`${BASE_URL}/categories/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
