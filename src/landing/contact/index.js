import React, { useState } from 'react'
import './style.scss'

export default () => {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState('');

  return (<div className='contact-component' id='build'>
    <div className='container' id='contact'>
      <div className='landing-big-title'>About yours</div>
      <div className='contact-form'>
        <div>
          <div className='label'>Project Link (optional)</div>
          <input value={url} placeholder='https://amazing-project.com' type='url' onChange={(e)=>setUrl(e.target.value)} />
        </div>
        <div className='margin-top'>
          <div className='label'>What do you want to achieve</div>
          <textarea value={details} placeholder='0.5 ~ 5 sentences' rows='5' onChange={(e)=>setDetails(e.target.value)}/>
        </div>
        <div className='action'>
          <a href={`mailto:teamamazyyy@gmail.com?subject=${encodeURI(`[*Important] ${url}`)}&body=${encodeURI(`
Hi, Amazyyy team

${details}

>>> Project URL: ${url}
          `)}`} target='_blank' rel='noopener noreferrer'>
            <div className='button'>Let's make it happen!</div>
          </a>
        </div>
      </div>
    </div>
  </div>)
}
