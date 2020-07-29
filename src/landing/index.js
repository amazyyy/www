import React from 'react'
import Navbar from './navbar'
import Jumbo from './jumbo'
import Portfolio from './portfolio'
import './style.scss'

export default () => (
  <div className='landing-component'>
    <Navbar />
    <Jumbo />
    <Portfolio />
  </div>
)
