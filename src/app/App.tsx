import React from 'react';
import AppBar from '@mui/material/AppBar';

import './App.scss';
import {ContactsArea} from '../components/ContactsArea/ContactsArea';


function App() {
  return (
    <div className="App">
        <AppBar position="static">hihi</AppBar>
        <ContactsArea  />
    </div>
  );
}

export default App;
