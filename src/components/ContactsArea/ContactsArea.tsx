import React from 'react';

import {ContactsList} from './ContactsList/ContactsList';
import {AddContactForm} from './AddContactForm/AddContactForm';


export const ContactsArea = () => {
    return (
        <div>
            <ContactsList />
            <AddContactForm />
        </div>
    );
};
