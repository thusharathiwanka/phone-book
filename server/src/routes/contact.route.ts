import { Router } from 'express';

import { saveContact, deleteContact } from '../controllers/contact.controller';

const router = Router();

router.patch('/:categoryId/', saveContact);
router.delete('/:categoryId/:contactId', deleteContact);

export default router;
