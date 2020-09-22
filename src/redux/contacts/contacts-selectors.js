import { createSelector } from '@reduxjs/toolkit';

export const getItemsSelector = state => state.contacts.items;
export const getLoadingSelector = state => state.contacts.loading;
export const getFilterSelector = state => state.contacts.filter;
export const getErrorsSelector = state => state.errors;

export const getFilterContactsSelector = createSelector(
  [getItemsSelector, getFilterSelector],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
