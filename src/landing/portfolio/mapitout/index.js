import React from 'react'

const points = [
  {
    icon: '',
    content: 'MongoDB, Express, React/Redux, Nodejs Application'
  },
  {
    icon: '',
    content: 'Location based, web application.'
  },
  {
    icon: '',
    content: 'Google Map and Mapbox integration'
  }
]

export default () => (<div className='demo-component left'>
  <div className='intro-container'>
    <div className='project-title'>MapItOut</div>
    <div className='project-point'>
      {points.map(p=><div key={p.content} className='item'>
        <div className='content'>{p.content}</div>
      </div>)}
    </div>
  </div>
  <div className='demo-image'>
    <img src='images/projects/mapitout.png'/>
  </div>
</div>)
