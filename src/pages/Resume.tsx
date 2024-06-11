import './Resume.css'
import { Helmet } from 'react-helmet'
import Icon from '../../images/js.png'

function Resume() {
  return (
   <> 
    <Helmet>
      <title>Resume</title>
      <meta property="og:title" content="My Resume"/>
      <meta property="og:description" content="Jatin Suri's Resume"/>
      <meta property="og:image" content="/images/resume-embed.png"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="description" content="My Resume"/>
      <meta property="og:url" content="https://jatinsu.github.io/website/resume"/>
      <meta property="og:type" content="website"/>
      <link rel="icon" href={Icon}/>
    </Helmet>
    <div className='pdf-container'>
        <iframe
            title="Resume"
            // did this by publishing repo as a page and then using the link to the pdf for google drive
            src="https://jatinsu.github.io/website/images/Resume.pdf"
        ></iframe>
    </div>
   
   </>
  )
}



export default Resume