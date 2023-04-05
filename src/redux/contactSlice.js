import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annia Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const chekContact = state.contacts.find(
        contact => contact.name === action.payload.name
      );
      if (chekContact) {
        return alert(chekContact.name + ' is already in contact');
      }
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
export const getAllContact = state => state.contacts.contacts;
export const getFilteredContact = state => state.contacts.filter;

export const findFilteredContact = (contacts, filter) => {
  if (filter) {
    const name = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return name;
  }
  return contacts;
};
