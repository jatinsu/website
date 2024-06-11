import DownArrow from '../icons/down-arrow.svg'
import Icon from '../../images/js.png'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import {Helmet} from 'react-helmet'

function Home() {
  // thanks to https://javascript.plainenglish.io/hiding-dom-elements-in-react-based-on-scrolling-d9a9ef1f1f5
  const [isVisible, setIsVisible] = useState(true);
  const getOffset = (element: HTMLElement | null) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };
  const heightToHIde = getOffset(document.querySelector('.footer-text') as HTMLElement);
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
    <Helmet>
      {/* these are for embeds */}
      <title>My Portfolio</title>
      <meta property="og:title" content="jatinsuri.com"/>
      <meta property="og:description" content="My Portfolio website"/>
      <meta property="og:image" content="https://jatinsu.github.io/website/images/embed.png"/>
      <meta name="twitter:card" content="summary_large_image/"/>
      <link rel="icon" href={Icon}/>
    </Helmet>
    <NavLink to='/resume' className='resume-link'>Resume</NavLink>
    <div className='menu'>
    <div className="menu-item">About</div>
    <div className="menu-item">Projects</div>
    <div className="menu-item">Contact</div>
  </div>
    <div className="hi-text">Hi.</div>
    <div className='scroll-element'>
    {<img className={`animate-scroll ${isVisible ? '' : 'hide'}`} src={DownArrow} alt="Down Arrow" />}
  </div>       
  <div className='content'>
    <div className='content-text'>
      <div className='intro'>I'm Jatin</div>
      <div className='intro'>I'm a Developer</div>
      <div className='test'></div>
    </div>
  </div>
  <div className='footer'>
    <div className='footer-text'>Made with ❤️ by Jatin</div>
  </div>
    
    </>
  );
}

export default Home;