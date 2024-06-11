import './Resume.css'

function Resume() {
  return (
   <> 
    <title>Resume</title>
    <div className='pdf-container'>
    <iframe
    title="Resume"
    // did this by publishing repo as a page and then using the link to the pdf for google drive
    src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://jatinsu.github.io/website/images/Resume.pdf"
    height="850"
    width="640"
></iframe>
    </div>
   
   </>
  )
}

export default Resume