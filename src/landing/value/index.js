import React from 'react'
import './style.scss'

export default () => (<div className='value-component container'>
  <div className='landing-big-title'>Agility</div>
  <div className='item-component row'>
    <div className='col-xs-12 col-sm-6 col-md-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-comments-o" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Communication</div>
          <div className='details'>Consistent effective communication with you to deliver the product you want.</div>
        </div>
      </div>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-code" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Effective</div>
          <div className='details'>We listen to your demand and come up with a one-in-a-million solution.</div>
        </div>
      </div>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-fighter-jet" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Efficient</div>
          <div className='details'>Delivery production ready software in less time and higher quality.</div>
        </div>
      </div>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Elastic</div>
          <div className='details'>Build software that can adapt to any devices and scenarios.</div>
        </div>
      </div>
    </div>
  </div>
</div>)
