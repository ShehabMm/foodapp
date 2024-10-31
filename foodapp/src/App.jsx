import './app.css'
import Search from './Components/Search';
import Foodlist from './Components/Foodlist';
import { useState } from 'react';
import Nav from './Components/Nav';
function App() {
const [fooddata, setfooddata]=useState([])
  return (
    <div className="App">
      <Nav/>
      <Search   fooddata={fooddata}   setfooddata={setfooddata}    />
      <Foodlist   fooddata={fooddata} />
    </div>
  )
}

export default App
