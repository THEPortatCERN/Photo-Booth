import React from 'react'

import logo from './images/THEPortLogoSmall.png'

const Card = ({image}) => {

  // const year = getYear() --> something like this
  // const event = `THEPort humanitarian hackathon ${year}` --> something like this

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={logo} className='card-logo' alt='THE Port'/>
        <h2 className='card-event'>EVENT NAME GOES HERE</h2>
      </div>
      <img src={image} className='card-img'/>
      <div className='card-footer'>
        <div className='quote-div'>
          <strong classname='quote'>I must study politics and war that my sons may  have liberty to study mathematics and philosophy.</strong>
          <strong classname='author'>John Adams</strong>
        </div>
        <img src='{qrCode}' className='qrCode' alt='qr code goes here'/>
      </div>
    </div>
  )
}

export default Card