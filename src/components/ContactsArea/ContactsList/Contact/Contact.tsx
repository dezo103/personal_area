import React from 'react';
import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import {ContactPropsType} from '../../../../types/PropsTypes';
import Card from "@mui/material/Card";
import style from './Contact.module.scss';

export const Contact = (props: ContactPropsType) => {
    return (
        <Card style={{margin: '8px'}}>
            <li className={style.contactItem}>
                <span>{props.contactName}</span>
                <IconButton>
                    <Delete/>
                </IconButton>
            </li>
        </Card>
    );
};

