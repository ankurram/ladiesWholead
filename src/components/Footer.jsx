import React from 'react'

const Footer = () => {
  const imagePath = require('../assets/images/logo-white.webp');
  return (
    <div className='bg-black mt-[100px]'>
      <div className="container mx-auto">
        <div className='flex footer py-[100px]'>
          <div className='max-w-[25%] w-full'>
              <img className='max-w-[200px] w-full' src={imagePath} alt="logo" />
          </div>
          <div className='max-w-[25%] w-full'>
            <h3 className='text-2xl mb-6 font-bold'>Join LWL</h3>
            <ul className='text-lg flex flex-col gap-2'>
              <li>Membership</li>
              <li>Events</li>
              <li>Benefits</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div className='max-w-[25%] w-full'>
            <h3 className='text-2xl mb-6 font-bold'>Resources</h3>
            <ul className='text-lg flex flex-col gap-2'>
              <li>Membership</li>
              <li>Events</li>
              <li>Benefits</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div className='max-w-[25%] w-full'>
            <h3 className='text-2xl mb-6 font-bold'>Company</h3>
            <ul className='text-lg flex flex-col gap-2'>
              <li>Membership</li>
              <li>Events</li>
              <li>Benefits</li>
              <li>Partnership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer