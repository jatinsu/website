import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Resume from './pages/Resume'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
)
