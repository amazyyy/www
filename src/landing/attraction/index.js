import React from 'react'
import './style.scss'

const points = [
  {
    title: 'Communicate',
    details: 'Consistent communication with you to deliver the product you want.',
    icon: 'fa-comments-o'
  },
  {
    title: 'Effective',
    details: 'We listen to your demand and come up with a one-in-a-million solution.',
    icon: 'fa-code'
  },
  {
    title: 'Efficient',
    details: 'Delivery production ready software in less time and higher quality.',
    icon: 'fa-fighter-jet'
  },
  {
    title: 'Elastic',
    details: 'Build software that can adapt to any devices and scenarios.',
    icon: 'fa-arrows-alt'
  }
]

export default () => (<div className='attraction-component'>
  <div className='container'>
  <div className='item-component row'>
    {points.map((p=>(<div className='col-xs-12 col-sm-6 col-md-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className={`fa ${p.icon}`} aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>{p.title}</div>
          <div className='details'>{p.details}</div>
        </div>
      </div>
    </div>)))}
  </div>
  </div>
</div>)
