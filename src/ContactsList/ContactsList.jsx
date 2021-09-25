import 'normalize.css';

import React from "react";
import PropTypes from 'prop-types';

import ContactItem from "ContactItem";
import {Contacts, ContactToAdd} from './ContactsList.styled';

export default function ContactsList({ contacts, onDeleteContact}) {

  return (
      <Contacts>
      {contacts.map(({ id, name, number }) =>
        <ContactToAdd key={id}>
          <ContactItem 
            name={name}
            number={number}
            onClick={()=>onDeleteContact(id)}
          />
        </ContactToAdd>)
      }
      </Contacts>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired
};