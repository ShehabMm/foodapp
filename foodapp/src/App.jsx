import Search from './Components/Search';
import Foodlist from './Components/Foodlist';
import { useState } from 'react';
function App() {
const [fooddata, setfooddata]=useState([])
  return (
    <div className="App">
      <Search   fooddata={fooddata}   setfooddata={setfooddata}    />
      <Foodlist   fooddata={fooddata} />
    </div>
  )
}

export default App
