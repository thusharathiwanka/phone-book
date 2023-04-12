import { BASE_URL } from '../config/app.config';
import { CategoryI } from '../types/category.type';
import { ContactI } from '../types/contact.type';

export const createContact = async (
  categoryId: string,
  contact: Omit<ContactI, '_id'>
): Promise<Response> => {
  return fetch(`${BASE_URL}/contacts/${categoryId}`, {
    method: 'PATCH',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteContact = async (
  categoryId: string,
  contactId: string
): Promise<CategoryI> => {
  const response = await fetch(
    `${BASE_URL}/contacts/${categoryId}/${contactId}`,
    {
      method: 'DELETE',
    }
  );
  return await response.json();
};
