// import React from 'react'
import Resume from './pages/Resume'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}


export default App