import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home'
import Nav from './Routes/Nav'
import Slyder from './Routes/Slyder'
import Converter from './Routes/converter'
import List from './Routes/to do list'
import DList from './Routes/D List'
import GessNumber from './Routes/gess number';
// import FizBaz from './Routes/FizBaz'
import Task from './Routes/task'

function App() {
return (
  <Routes>
    <Route path="/" element={<Nav />}>
      <Route path="Home" element={<Home />} />
      <Route path="Slyder" element={<Slyder />} />
      <Route path="DList" element={<DList />} />
      <Route path="Task" element={<Task />} />
      <Route path="list" element={<List />} />
      <Route path="GessNumber" element={<GessNumber />} />
      <Route path="Converter" element={<Converter />} />
      {/* <Route path="FizBaz" element={<FizBaz />} /> */}


    </Route>
  </Routes>
)
}

export default App;
