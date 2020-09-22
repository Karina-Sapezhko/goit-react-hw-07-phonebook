import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
  notificationAction,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const notificationReducer = createReducer('', {
  [notificationAction]: (_, { payload }) => payload,
  [addContactsSuccess]: _state => '',
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactsError]: (_, { payload }) => payload,
  [deleteContactsError]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
});
