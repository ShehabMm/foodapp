import './app.css'
import Search from './Components/Search';
import Foodlist from './Components/Foodlist';
import { useState } from 'react';
import Nav from './Components/Nav';
import MoreDetails from './Pages/MoreDetails';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import FoodDetails from './Components/FoodDetails'
function App() {
  return (
    <div className="App">
    


      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/details" element={<MoreDetails/>} >

<Route path="profile"  element={<FoodDetails/>}/>

        </Route>

      </Routes>
    </div>
  )
}

export default App
