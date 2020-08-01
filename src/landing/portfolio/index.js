import React from 'react'
import './style.scss'
import Hodldex from './hodldex'
import Mapitout from './mapitout'

export default () => (<div className='portfolio-component container'>
  <div className='landing-big-title'>Projects</div>
  <Hodldex />
  <Mapitout />
</div>)
