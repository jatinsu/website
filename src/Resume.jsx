import './Resume.css'

function Resume() {
  return (
    <div className='pdf-container'>
        <iframe
            title="Resume"
            // did this by publishing repo as a page and then using the link to the pdf for google drive
            src="https://jatinsu.github.io/website/src/assets/Resume.pdf"
        ></iframe>
    </div>
  )
}



export default Resume