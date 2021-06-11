import React from 'react'
import './Rain.scss'
import Rain_jpg from './r.jpg'
import Rain_mp4 from './rain.mp4'
import Rain_webm from './rain.webm'

const Rain = () => (
  <React.Fragment>
    <div className='background'>
      <video
        autoPlay
        className='background__video'
        loop
        muted
        poster={Rain_jpg}
      >
        <source src={Rain_webm} type='video/webm' />
        <source src={Rain_mp4} type='video/mp4' />
        <p lang='en'>Your browser doesn't play video</p>
      </video>
      <div className='background__logo'>
        <h1 className='background__heading-1' lang='ru'>
          До<span className='heading-1__span'>/ //</span>дь
        </h1>
        <h4 className='background__heading-4' lang='en'>
          Optimistic channel
        </h4>
        <h2 className='background__heading-2' lang='en'>
          live
        </h2>
      </div>
    </div>
  </React.Fragment>
)

export default Rain
