import React from 'react'

const points = [
  {
    icon: '',
    content: 'From info call to completion, delivery in days.'
  },
  {
    icon: '',
    content: 'From days to months, long-term collaboration.'
  },
  {
    icon: '',
    content: 'Ecommerce, CMS, landing pages, assets design and exporting.'
  }
]

export default () => (<div className='demo-component row'>
  <div className='intro-col col-sm-12 col-md-6'>
    <div className='project-title'>Your website</div>
    <div className='project-point'>
      {points.map(p=><div key={p.content} className='item'>
        <div className='content'>{p.content}</div>
      </div>)}
      <div className='action-container'>
      <a href='/#contact'><div className='button'>Get started!</div></a>
      </div>
    </div>
  </div>
  <div className='image-col col-sm-12 col-md-6'>
    <img alt='colorful' src='assets/images/colorful-yours.png' width='1153px' />
  </div>
</div>)
