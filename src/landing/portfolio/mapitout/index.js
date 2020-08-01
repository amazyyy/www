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

export default () => (<div className='demo-component row'>
  <div className='intro-col col-sm-12 col-md-6'>
    <div className='project-title'>MapItOut</div>
    <div className='project-point'>
      {points.map(p=><div key={p.content} className='item'>
        <div className='content'>{p.content}</div>
      </div>)}
      <div className='action-container'>
        <a target='_blank' href='https://mapitout.github.io/#/maps'><div className='button'>Visit</div></a>
      </div>
    </div>
  </div>
  <div className='image-col col-sm-12 col-md-6'>
    <img alt='mapitout' src='assets/images/mapitout-app.png'/>
  </div>
</div>)
