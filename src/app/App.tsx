import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Route, Routes} from 'react-router-dom'

import './App.scss';
import {ContactsArea} from '../components/ContactsArea/ContactsArea';
import {Menu} from "@mui/icons-material";
import {Container} from "@mui/material";
import {Login} from "../components/Login/Login";
import Button from '@mui/material/Button';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../redux/store";
import {logOutTC} from "../redux/creators";
import LinearProgress from '@mui/material/LinearProgress';
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {RequestStatusType} from "../types/DataTypes";



function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logOutTC())
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar className='mainToolbar'>
                    <Typography variant="h6">
                        Personal area
                    </Typography>
                    { isLoggedIn && <Button color="inherit"
                                            onClick={logoutHandler}>Logout</Button>}
                </Toolbar>
                <div className='progressViewArea'>
                    {status === 'loading' && <LinearProgress/>}
                </div>
            </AppBar>
            <Routes>
                <Route path="/" element={<ContactsArea/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
