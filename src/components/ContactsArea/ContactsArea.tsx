import React from 'react';

import {ContactsList} from './ContactsList/ContactsList';


export const ContactsArea = () => {
    return (
        <div>
            <ContactsList />
            <input type="text"/>
        </div>
    );
};
