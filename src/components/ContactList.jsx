import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
