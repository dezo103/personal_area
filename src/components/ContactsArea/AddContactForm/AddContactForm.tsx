import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import style from './AddContactForm.module.scss';

export const AddContactForm = () => {
    return (
        <div className = {style.addContactFormContainer}>
            <TextField />
            <Button variant='contained'
                    color='success'
                    size='large'>Add Contact</Button>
        </div>
    );
};
