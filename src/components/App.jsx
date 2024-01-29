import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectFilteredContacts } from '../redux/contactsSlice';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} onDeleteContact={(id) => dispatch(deleteContact(id))} />
    </div>
  );
};

export default App;
