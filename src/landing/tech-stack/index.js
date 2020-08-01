import React from 'react'
import './style.scss'

export default () => (<div className='tech-stack-component container'>
  <div className='landing-big-title'>Trustworthy</div>
  <div className='stack-component row'>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-code" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Development</div>
          <img alt='development' src='assets/images/landing/tech-development-icons.svg' width='100%' />
          <div className='details'>Detail-oriented full-stack software development with advanced Javascript stack in HTML/CSS, React, NodeJS, MongoDB.</div>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-codepen" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>Design</div>
          <img alt='development' src='assets/images/landing/tech-design-icons.svg' width='100%' />
          <div className='details'>Elegant user interface design, company identity system, conference visual design, with Illustrator, Sketch, or Figma.</div>
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
          <img alt='development' src='assets/images/landing/tech-devops-icons.svg' width='100%' />
          <div className='details'>Reliable CI/CD pipeline, emgineering automation, software architect design in AWS, Docker/Kubernetes, Terraform.</div>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <div className='item'>
        <div className='icon-card'>
          <i className="fa fa-link" aria-hidden="true"></i>
        </div>
        <div className='info-container'>
          <div className='title'>DLT/DApp</div>
          <img alt='development' src='assets/images/landing/tech-blockchain-icons.svg' width='100%' />
          <div className='details'>Blockchain application design/consulting, smart contract testing/auditing, EVM-based dApp development and launching.</div>
        </div>
      </div>
    </div>
  </div>
</div>)
