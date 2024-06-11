import './Resume.css'

function Resume() {
  return (
   <> 
    <meta property="og:title" content="My Resume"/>
    <meta property="og:description" content="My Portfolio Website"/>
    <meta property="og:image" content="/images/resume-embed.png"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <title>Resume</title>
    <div className='pdf-container'>
        <iframe
            title="Resume"
            // did this by publishing repo as a page and then using the link to the pdf for google drive
            src="https://jatinsu.github.io/website/images/Resume.pdf"
            height="882"
            width="640"
        ></iframe>
    </div>
   
   </>
  )
}



export default Resume