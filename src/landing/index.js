import React from 'react'
import Navbar from './navbar'
import Jumbo from './jumbo'
import Portfolio from './portfolio'
import Service from './service'
import Value from './value'
import './style.scss'

export default () => (
  <div className='landing-component'>
    <Navbar />
    <Jumbo />
    <Service />
    <Portfolio />
    <Value />
  </div>
)
