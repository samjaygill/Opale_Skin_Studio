import React from 'react'
import images from "./Assets/images.png"
import "./css/Images.css"


function Images() {
  return (
    <div className='image-container'>
      <img src={images} alt="After" className="after-images"/>
    </div>
  )
}

export default Images