import React from 'react'

const points = [
  {
    icon: '',
    content: 'React/Redux dApp'
  },
  {
    icon: '',
    content: 'Solidity smart contract'
  },
  {
    icon: '',
    content: 'Metamask and Trust wallet integration'
  }
]

export default () => (<div className='demo-component'>
  <div className='intro-container'>
    <div className='project-title'>HODL DEX</div>
    <div className='project-point'>
      {points.map(p=><div key={p.content} className='item'>
        <div className='content'>{p.content}</div>
      </div>)}
    </div>
  </div>
  <div className='demo-image'>
    <img src='images/projects/hodldex.png'/>
  </div>
</div>)
