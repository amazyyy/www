import React from 'react'

export default () => (<div className='demo-component row'>
  <div className='intro-col col-sm-12 col-md-6'>
    <div className='project-title'>HODL DEX</div>
    <div className='project-point'>
      <div className='item'>
        <div className='content'>React/Redux dApp</div>
      </div>
      <div className='item'>
        <div className='content'>Solidity smart contract</div>
      </div>
      <div className='item'>
        <div className='content'>Metamask and Trust wallet integration</div>
      </div>
    </div>
    <div className='action-container'>
      <a target='_blank' rel='noopener noreferrer' href='https://www.hodldex.io'><div className='button'>Visit</div></a>
    </div>
  </div>
  <div className='image-col col-sm-12 col-md-6'>
    <img alt='hodldex' src='assets/images/hodldex-app.png'/>
  </div>
</div>)
