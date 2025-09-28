import React from 'react'
import { assets } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
        <img src={assets.bottom_banner_image} alt="bottom_banner_image" className='
        w-full hidden md:block'/>
        <img src={assets.bottom_banner_image_sm} alt="bottom_banner_image_sm" className='
        w-full md:hidden' />
      
    </div>
  )
}

export default BottomBanner
