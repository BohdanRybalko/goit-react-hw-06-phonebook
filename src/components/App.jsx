import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from './contactsSlice';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  const addContactHandler = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const filterChangeHandler = (value) => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={filterChangeHandler} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContactHandler} />
    </div>
  );
};

export default App;
