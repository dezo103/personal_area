import React from 'react';
import {v1} from 'uuid';

import {Contact} from './Contact/Contact';
import style from './ContactsList.module.scss';


export const ContactsList = () => {

    const contacts = [
        {id: v1(), name: 'has'},
        {id: v1(), name: 'nas'},
        {id: v1(), name: 'das'},
        {id: v1(), name: 'mas'},
        {id: v1(), name: 'zas'}
    ]

    return (
        <ul className = {style.contactList}>
            {contacts.map(c => <Contact contactName = {c.name}/>)}
        </ul>
    );
};
