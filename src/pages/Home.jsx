import './Home.css'
import Tools from '../components/Tools'
import DevImage from '../assets/dev-image.png'
import Navbar from '../components/Navbar'
function Home() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='text-container'>
          <div className='intro'>Hey, my name is</div>
          <div className='name'>Jatin Suri</div>
          <div className='description'>I'm a Software Engineer based out of Maryland</div>
        </div>

        <div className='image-container'>
          <img src={DevImage} alt='dev' className='dev_image' />
        </div>
      </div>
      <Tools />
      <div className='placeholder' style={{minHeight: '100vh'}}></div>
    </>
  )
}

export default Home
