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
    <iframe src="https://drive.google.com/file/d/1Dsob3l0dWCHXK3ZYo9Mp9n2ya7Tn7Io4/preview" width="640" height="850" allow="autoplay"></iframe>
    </div>
   </>
  )
}

export default Resume