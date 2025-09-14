import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden' />
      <div>
        <h1>Freshness You can Trust, Savings You will Love!</h1>
      </div>
      <div>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull
        transition rounded text-white cursor-pointer'>Shop Now
        <img className='md:hidden translate group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow icon" /></Link>
      </div>
    </div>
    
  )
}

export default MainBanner
