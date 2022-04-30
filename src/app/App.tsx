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


function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Personal area
                    </Typography>
                    {/*{ isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Logout</Button>}*/}
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<ContactsArea/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
