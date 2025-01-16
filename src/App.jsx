import './App.css'
import Tools from './Tools'
function App() {

  return (
    <>
      <div className='container'>
        <div className='text-container'>
          <div className='intro'>Hey, my name is</div>
          <div className='name'>Jatin Suri</div>
          <div className='description'>I'm a Software Engineer based out of Maryland</div>
        </div>

        <div className='image-container'>
          <img className='dev_image' src="src/assets/dev-image.png" alt="" />
        </div>
      </div>
      <Tools />
    </>
  )
}

export default App
