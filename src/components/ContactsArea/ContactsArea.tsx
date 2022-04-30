import React, {useState} from 'react';

import {ContactsList} from './ContactsList/ContactsList';
import {AddContactForm} from './AddContactForm/AddContactForm';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ContactType} from "../../types/DataTypes";
import {Navigate} from "react-router-dom";


export const ContactsArea = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const contacts = useSelector<AppRootStateType, Array<ContactType>>(state => state.contacts)
    const [searchInputValue, setSearchInputValue] = useState('')

    const filterContacts = (value: string) => {
        setSearchInputValue(value)
    }

    const filteredContacts = contacts.filter(c => {
        return c.name.toLowerCase().includes(searchInputValue.toLowerCase())
    })

    if(!isLoggedIn) {
        return <Navigate to={"login"}/>
    }

    return (
        <div>
            <ContactsList contacts={filteredContacts}/>
            <AddContactForm filterContacts = {filterContacts}/>
        </div>
    );
};
