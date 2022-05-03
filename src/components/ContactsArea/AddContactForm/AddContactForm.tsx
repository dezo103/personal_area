import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import style from './AddContactForm.module.scss';
import {useAppDispatch} from '../../../redux/store';
import {addContactTC} from '../../../redux/creators';
import {SearchForm} from './SearchForm/SearchForm';
import {AddContactFormPropsType} from '../../../types/DataTypes';


export const AddContactForm = React.memo((props: AddContactFormPropsType) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const dispatch = useAppDispatch();

    const addItemHandler = () => {
        if (title.trim() !== '') {
            dispatch(addContactTC(title))
            setTitle('');
        } else {
            setError('Title is required');
        }
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
        <Card className={style.addContactFormContainer}>
            <SearchForm filterContacts = {props.filterContacts}/>
            <TextField label='Add contacts'
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       helperText={error}
                       error={!!error}
                       value={title}/>
            <Button variant='contained'
                    color='success'
                    size='large'
                    onClick={addItemHandler}>Add</Button>
        </Card>
    );
})
