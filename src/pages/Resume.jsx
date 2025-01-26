import './Resume.css'
import ResumePDF from '../assets/Resume.pdf'
import Navbar from '../components/Navbar'

function Resume() {
  return (
    <>
      <Navbar />
      <div className='pdf-container'>
          <iframe
              title="Resume"
              src={ResumePDF}
          ></iframe>
      </div>
    </>
  )
}

export default Resume