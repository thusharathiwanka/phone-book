import Category from '../models/category.model';
import { ContactI } from 'types/contact.type';

export const saveContactService = async (
  id: string,
  contact: ContactI
): Promise<Document[] | null> => {
  try {
    return await Category.findByIdAndUpdate(
      id,
      { $push: { contacts: contact } },
      { new: true }
    );
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteContactsService = async (
  categoryId: string,
  contactId: string
) => {
  try {
    return await Category.findByIdAndUpdate(
      categoryId,
      { $pull: { contacts: { _id: contactId } } },
      { new: true, safe: true, multi: false }
    );
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
