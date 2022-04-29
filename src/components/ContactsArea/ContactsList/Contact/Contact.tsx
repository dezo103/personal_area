import React from 'react';
import {Delete} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import {ContactPropsType} from '../../../../types/PropsTypes';
import Card from "@mui/material/Card";
import style from './Contact.module.scss';
import {changeContactTC, removeContactTC} from "../../../../redux/contacts-reducer";
import {useAppDispatch} from "../../../../redux/store";
import {EditableSpan} from "./EditableSpan/EditableSpan";


export const Contact = (props: ContactPropsType) => {

    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(removeContactTC(props.id))
    }

    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeContactTC(newValue, props.id))
    }

    return (
        <Card style={{margin: '8px'}}>
            <li className={style.contactItem}>
                <EditableSpan value={props.contactName} onChange={onTitleChangeHandler}/>
                {/*<span>{props.contactName}</span>*/}
                <IconButton onClick={onClickHandler}>
                    <Delete/>
                </IconButton>
            </li>
        </Card>
    );
};

