import React from 'react'

const Card = ({image}) => {

  // const year = getYear() --> something like this
  // const event = `THEPort humanitarian hackathon ${year}` --> something like this

  return (
    <div className='card'>
      <div className='card-header'>
        <img src='{logo}' classNamecard-logo alt='the port logo'/>
        <h5 className='card-event'>EVENT NAME GOES HERE</h5>
      </div>
      <img src={image} className='card-img'/>
      <div className='card-footer'>
        <p>quote goes here</p>
        <img src='{qrCode}' className='qrCode' alt='qr code goes here'/>
      </div>
    </div>
  )
}

export default Card