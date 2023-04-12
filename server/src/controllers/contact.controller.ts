import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

import {
  deleteContactsService,
  saveContactService,
} from '../services/contact.service';

export const saveContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { categoryId } = req.params;

  try {
    const data = await saveContactService(categoryId, req.body);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No category found' });
    }

    return res.status(201).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const deleteContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { categoryId, contactId } = req.params;

  try {
    const data = await deleteContactsService(categoryId, contactId);

    if (isEmpty(data)) {
      return res.status(404).json({ message: 'No category found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};
