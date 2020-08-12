import React from 'react'
import Navbar from './navbar'
import Jumbo from './jumbo'
import Portfolio from './portfolio'
import Service from './service'
import Value from './value'
// import Attraction from './attraction'
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
    {/* <Attraction /> */}
    <Contact />
    <Bottom />
  </div>
)
