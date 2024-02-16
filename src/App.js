import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Home from './components/Home';
import Select from './components/Select';
import Bridging from './files/Bridging';
import Transferee from './files/Transferee';
import Upsec from './components/Upsec';
import Nfc from './components/Nfc';
import Bluetooth from './components/Bluetooth';
import Flashdrive from './components/Flashdrive';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='upload' element ={<Upload/>}/>
        <Route path ='select' element ={<Select/>}/>
        <Route path = 'upsec' element ={<Upsec/>}/>
        <Route path = 'nfc' element ={<Nfc/>}/>
        <Route path = 'bluetooth' element ={<Bluetooth/>}/>
        <Route path = 'flashdrive' element ={<Flashdrive/>}/>  
        <Route path ='bridging' element ={<Bridging/>}/>
        <Route path ='transferee' element ={<Transferee/>}/>
      </Routes>
      </Router> 
    </>
  );
}

export default App;
