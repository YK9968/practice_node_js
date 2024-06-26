import createHttpError from 'http-errors';
import {
  addContact,
  getAllContacts,
  getContactsById,
  removeContact,
  updateContact,
} from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await getContactsById(contactId);

  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully find contact by id: ${contactId} `,
    data: contact,
  });
};

export const createContactController = async (req, res, next) => {
  const student = await addContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully add contact',
    data: student,
  });
};

export const removeContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await removeContact(contactId);

  if (!contact) {
    next(new createHttpError(404, `Not found contact by id ${contactId}`));
    return;
  }

  res.status(204).send();
};

export const upsertContactControler = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await updateContact(contactId, req.body, { upsert: true });

  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  const status = contact.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upserted a contact!',
    data: contact.student,
  });
};

export const updateContactControler = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await updateContact(contactId, req.body);

  if (!contact) {
    next(createHttpError(404, 'Contact not Found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a student!`,
    data: contact.student,
  });
};
