import { Router } from 'express';
import {
  createContactController,
  getAllContactsController,
  getContactsByIdController,
  removeContactController,
  updateContactControler,
  upsertContactControler,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactsByIdController));

router.post('/', ctrlWrapper(createContactController));

router.delete('/:contactId', ctrlWrapper(removeContactController));

router.put('/:contactId', ctrlWrapper(upsertContactControler));

router.patch('/:contactId', ctrlWrapper(updateContactControler));

export default router;
