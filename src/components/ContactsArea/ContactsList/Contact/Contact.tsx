import React from 'react';

import {ContactPropsType} from '../../../../types/PropsTypes';
//import style from './Contact/Contact.module.scss'

export const Contact = (props: ContactPropsType) => {
    return (
        <div>
            <li>{props.contactName}</li>
        </div>
    );
};

