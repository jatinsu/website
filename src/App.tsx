// import React from 'react'
// import { useEffect } from 'react'
import './App.css'
import DownArrow from './icons/down-arrow.svg'

function App() {
  
  return (
    <>
      <div className='menu'>
        <div className="menu-item">About</div>
        <div className="menu-item">Projects</div>
        <div className="menu-item">Contact</div>
      </div>
      <div className="hi-text">Hi.</div>
      {/* find a better way to do this */}
      <div className='scroll-element'>
          <img className='animate-scroll' src={DownArrow} alt="Down Arrow" />
      </div>
      <div className='content'>
        <div className='content-text'>
          <div>Hi I'm Jatin</div>
        </div>
      </div>
            
    </>
  )
}

export default App