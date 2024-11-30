import React from 'react'

const GuestCheckout = () => {
  return (
    <div>
        <div className="personal-details mt-5">
          <h2 className="text-2xl font-bold mb-10">Guest Details</h2>
          <div className="flex flex-row gap-3 mb-10">
            <div className='max-w-[50%] flex gap-3 w-full'>
              <select className='max-w-[20%] w-full outline-none border-b-[1px] border-black' name="" id="">
                <option value="">Mr.</option>
                <option value="">Ms</option>
              </select>
              <input className='max-w-[80%] w-full outline-none border-b-[1px] border-black' type="text" placeholder='First Name' />
            </div>
            <input className='max-w-[45%] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Last Name' />
          </div>
          <div className="flex flex-row gap-3 mb-10">
            <div className='max-w-[50%] flex gap-3 w-full'>
              <select className='max-w-[20%] w-full outline-none border-b-[1px] border-black' name="" id="">
                <option value="">+91</option>
              </select>
              <input className='max-w-[80%] w-full outline-none border-b-[1px] border-black' type="tel" placeholder='9876543210' />
            </div>
            <div className='flex gap-3 max-w-[50%] w-full'>
              <label className='max-w-[40%] w-full font-bold' htmlFor="">Enter OTP</label>
              <div className='flex gap-3 max-w-[60%] w-full items-center text-center'>
                <input className='w-[25%] outline-none border-b text-center' type="text" placeholder='8' />
                <input className='w-[25%] outline-none border-b text-center' type="text" placeholder='1' />
                <input className='w-[25%] outline-none border-b text-center' type="text" placeholder='2' />
                <input className='w-[25%] outline-none border-b text-center' type="text" placeholder='9' />
              </div>
            </div>
          </div>
          <div className="company">
            <div className='flex gap-3 mb-10'>
              <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black'  type="email" placeholder='email' />
            </div>
            <div className='flex gap-4 mb-10'>
              <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Company Name' />
              <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Designation' />
            </div>
          </div>
          <div className="address flex gap-4 mb-10">
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='City' />
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='User name' />
          </div>
          <div className="flex gap-4 mb-10">
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="password" placeholder='Password' />
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="password" placeholder='Confirm password' />
          </div>
        </div>
    </div>
  )
}

export default GuestCheckout