// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

import DownArrow from './icons/down-arrow.svg'

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const getOffset = (element: HTMLElement | null) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };
  const heightToHIde = getOffset(document.querySelector('.content-text') as HTMLElement);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > heightToHIde) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, []);

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
        
        {<img className={`animate-scroll ${isVisible ? '' : 'hide'}`} src={DownArrow} alt="Down Arrow" />}
      </div>       
      <div className='content'>
        <div className='content-text'>
          <div className='test'>Hi I'm Jatin</div>
        </div>
      </div>

    </>
  )
}


export default App