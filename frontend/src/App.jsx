import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

import Home from "./pages/Home/Home.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Admin from "./pages/Admin/Admin.jsx";

import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App