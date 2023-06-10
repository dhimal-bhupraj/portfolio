import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import "./App.css"
import Skills from './pages/Skills';
const App = () => {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='skills' element={<Skills></Skills>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  )
}

export default App
