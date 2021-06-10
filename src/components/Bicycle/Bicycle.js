import React from 'react'
import './Bicycle.scss'

const Bicycle = () => (
  <div className='bike'>
    <div className='bike__logo' tabindex='0'>
      <h1 className='bike__heading'>
        <span className='text-red'>
          CS<span className='text-blink'>S</span>
        </span>{' '}
        is aw<span className='text'>e</span>so<span className='text'>m</span>e
      </h1>
    </div>
    <div className='frame__top'></div>
    <div className='frame__chainstay'></div>
    <div className='frame__fork'></div>
    <div className='frame__seattube'></div>
    <div className='frame__seatstay'></div>
    <div className='frame__downtube'></div>
    <div className='seat'>
      <div className='seat__base'></div>
      <div className='seat__nose'></div>
    </div>
    <div className='handlebars'>
      <div className='handlebars__post'></div>
      <div className='handlebars__bar'></div>
      <div className='handlebars__handle'></div>
    </div>
    <div className='wheel wheel_back'>
      <div className='wheel__center'></div>
      <div className='wheel__spoke1'></div>
      <div className='wheel__spoke2'></div>
      <div className='wheel__spoke3'></div>
      <div className='wheel__spoke4'></div>
      <div className='wheel__spoke5'></div>
    </div>
    <div className='wheel wheel_front'>
      <div className='wheel__center'></div>
      <div className='wheel__spoke1'></div>
      <div className='wheel__spoke2'></div>
      <div className='wheel__spoke3'></div>
      <div className='wheel__spoke4'></div>
      <div className='wheel__spoke5'></div>
    </div>
  </div>
)

export default Bicycle
