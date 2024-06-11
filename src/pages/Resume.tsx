import './Resume.css'
import resumePDF from '/images/Resume.pdf'

function Resume() {
  return (
   <> 
    <title>Resume</title>
    <div className='pdf-container'>
        <embed src={resumePDF} type="application/pdf" height="750px" width="100%"></embed>
    </div>
   
   </>
  )
}

export default Resume