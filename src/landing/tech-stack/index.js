import React from 'react'
import './style.scss'

export default () => (<div className='tech-stack-component container'>
  <div className='landing-big-title'>Technology</div>
  <div className='stack-component row'>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-code" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Web Dev</div>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-codepen" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Architect</div>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-server" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>DevOps</div>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-link" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Blockchain</div>
        </div>
      </div>
    </div>
  </div>
</div>)
