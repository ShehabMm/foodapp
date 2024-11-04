import './app.css'
import MoreDetails from './Pages/MoreDetails';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import NEW from './Pages/New'
import NEW2 from './Pages/New2'

function App() {
  return (
    <div className="App">
    


      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/details" element={<MoreDetails/>} />

        <Route path="/new" element={<NEW/>} />

        <Route path="/2" element={<NEW2/>} />

      </Routes>
    </div>
  )
}

export default App
