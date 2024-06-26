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

export const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactsByIdController));

contactsRouter.post('/', ctrlWrapper(createContactController));

contactsRouter.delete('/:contactId', ctrlWrapper(removeContactController));

contactsRouter.put('/:contactId', ctrlWrapper(upsertContactControler));

contactsRouter.patch('/:contactId', ctrlWrapper(updateContactControler));
