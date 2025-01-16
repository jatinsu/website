import './Resume.css'
import ResumePDF from './assets/Resume.pdf'

function Resume() {
  return (
    <div className='pdf-container'>
        <iframe
            title="Resume"
            src={ResumePDF}
        ></iframe>
    </div>
  )
}



export default Resume