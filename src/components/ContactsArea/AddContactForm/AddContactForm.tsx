import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import style from './AddContactForm.module.scss';

export const AddContactForm = () => {
    return (
        <Card className = {style.addContactFormContainer}>
            <TextField label="Find contacts"/>
            <TextField label="Add contacts"/>
            <Button variant='contained'
                    color='success'
                    size='large'>Add</Button>
        </Card>
    );
};
