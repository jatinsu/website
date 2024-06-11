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


{/* <head>
<meta property="og:title" content="My Resume"/>
<meta property="og:description" content="My Portfolio website"/>
<meta property="og:image" content="/images/ResumeEmbed.png"/>
<meta name="twitter:card" content="summary_large_image"/>
</head>
<body>
<title>Resume</title>
<div className='pdf-container'>
    <embed src={resumePDF} type="application/pdf" height="750px" width="100%"></embed>
</div>
</body> */}