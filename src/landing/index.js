import React from 'react'
import Navbar from './navbar'
import Jumbo from './jumbo'
import Portfolio from './portfolio'
import Techstack from './tech-stack'
import './style.scss'

export default () => (
  <div className='landing-component'>
    <Navbar />
    <Jumbo />
    <Portfolio />
    <Techstack />
  </div>
)
