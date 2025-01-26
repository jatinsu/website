import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/resume') {
      document.title = 'My Resume';
    } else {
      document.title = 'My Portfolio';
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
