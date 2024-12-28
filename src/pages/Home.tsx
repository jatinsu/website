import DownArrow from '../icons/down-arrow.svg'
import Icon from '../../images/js.png'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
import {Helmet} from 'react-helmet'
import Navbar from './Navbar'
import { useLanyard } from "react-use-lanyard";

function Home() {
  // thanks to https://javascript.plainenglish.io/hiding-dom-elements-in-react-based-on-scrolling-d9a9ef1f1f5
  const [isVisible, setIsVisible] = useState(true);
  const getOffset = (element: HTMLElement | null) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };
  const lanyard = useLanyard({
		userId: "471024890909032489",
	});

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
      <link rel="icon" href={Icon}/>
    </Helmet>

    <Navbar />
    
    <div className="hi-text">Hi.</div>
    <div className='scroll-element'>
    {<img className={`animate-scroll ${isVisible ? '' : 'hide'}`} src={DownArrow} alt="Down Arrow" />}
  </div>       
  <div className='content'>
  
  {(lanyard.data?.data.activities[0]?.name === "Apple Music" || lanyard.data?.data.activities[0]?.name === "Spotify") && (
    <div>
      <div>Listening to {lanyard.data.data.activities[0].name}</div>
      <div>Artist: {lanyard.data.data.activities[0].state}</div>
      <div>Song Name: {lanyard.data.data.activities[0].details}</div>
    </div>
  )}
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