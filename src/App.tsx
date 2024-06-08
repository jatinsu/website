import React from 'react'
import { useEffect } from 'react'
import './App.css'
import DownArrow from './icons/down-arrow.svg'

function App() {
  
  return (
    <>
      <section>
        <span className="hi-text">Hi.</span>

      </section>
      {/* find a better way to do this */}
      <div className="test"></div>
      <div className='scroll-element'>
        Scroll
        <div>
          <img className='animate-scroll' src={DownArrow} alt="Down Arrow" />
        </div>
      </div>
    </>
  )
}

export default App