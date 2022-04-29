import React, {ChangeEvent} from 'react';
import TextField from "@mui/material/TextField";
import {SearchFormPropsType} from "../../../../types/DataTypes";

export const SearchForm = (props: SearchFormPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.filterContacts(e.currentTarget.value)
    }

    return (
        <TextField label="Find contacts"
                   onChange={onChangeHandler}
        />
    );
};
