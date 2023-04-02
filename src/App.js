import {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//Pages
import Home from './Pages/Home';

//css
import './App.css';

function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
