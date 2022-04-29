import React from 'react';

import {Contact} from './Contact/Contact';
import style from './ContactsList.module.scss';
import {ContactsListPropsType} from "../../../types/DataTypes";


export const ContactsList = (props: ContactsListPropsType) => {

    return (
        <ul className = {style.contactList}>
            {props.contacts.map(c => <Contact contactName = {c.name}
                                        key={c.id}
                                        id = {c.id}/>)}
        </ul>
    );
};
