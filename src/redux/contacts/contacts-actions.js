import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactError');

export const addContactsRequest = createAction('contacts/addContactRequest');
export const addContactsSuccess = createAction('contacts/addContactSuccess');
export const addContactsError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactsError = createAction('contacts/deleteContactError');

export const filterContacts = createAction('contacts/FILTER');
export const notificationAction = createAction('contacts/NOTIFICATION');
