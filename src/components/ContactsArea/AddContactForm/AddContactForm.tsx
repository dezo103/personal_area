import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import style from './AddContactForm.module.scss';

export const AddContactForm = () => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        // if (title.trim() !== '') {
        //     addItem(title);
        //     setTitle('');
        // } else {
        //     setError('Title is required');
        // }
        console.log()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return (
        <Card className = {style.addContactFormContainer}>
            <TextField label="Find contacts"/>
            <TextField label="Add contacts"
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
            <Button variant='contained'
                    color='success'
                    size='large'
                    onClick={addItemHandler}>Add</Button>
        </Card>
    );
};
