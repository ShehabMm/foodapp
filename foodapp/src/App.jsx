import './app.css'
import Search from './Components/Search';
import Foodlist from './Components/Foodlist';
import { useState } from 'react';
import Nav from './Components/Nav';
import MoreDetails from './Pages/MoreDetails';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
function App() {
  return (
    <div className="App">
    


      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/details" element={<MoreDetails/>} />

      </Routes>
    </div>
  )
}

export default App
