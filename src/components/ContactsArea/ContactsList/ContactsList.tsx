import React from 'react';

import {Contact} from './Contact/Contact';
import style from './ContactsList.module.scss';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {ContactType} from "../../../types/DataTypes";


export const ContactsList = () => {

    const contacts = useSelector<AppRootStateType, Array<ContactType>>(state => state.contacts)

    return (
        <ul className = {style.contactList}>
            {contacts.map(c => <Contact contactName = {c.name}
                                        key={c.id}
                                        id = {c.id}/>)}
        </ul>
    );
};
