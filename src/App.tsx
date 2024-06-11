import Resume from './pages/Resume'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>
    </>
  )
}


export default App