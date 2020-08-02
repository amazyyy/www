import React from 'react'
import Navbar from './navbar'
import Jumbo from './jumbo'
import Portfolio from './portfolio'
import Service from './service'
import Value from './value'
import Contact from './contact'
import Bottom from './bottom'
import './style.scss'

export default () => (
  <div className='landing-component'>
    <Navbar />
    <Jumbo />
    <Service />
    <Portfolio />
    <Value />
    <Contact />
    <Bottom />
  </div>
)
