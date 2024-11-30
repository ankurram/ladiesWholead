import React from 'react'

const Memberdetails = () => {
    
  return (
    <div className='container mx-auto'>
        <div className="flex p-5 gap-5">
      {/* Left Section: Membership Steps */}
      <div className="flex flex-col w-2/5 pr-5 relative">
        <ul className="list-none pl-0 relative">
          <li className="flex items-center mb-20">
            <span className="h-5 w-5 bg-pink-500 rounded-full mr-3"></span>
            <h3 className="font-bold text-xl">Membership Details</h3>
          </li>
          <div className="absolute left-2 top-[6px] h-[44%] w-1 bg-pink-500"></div>

          <li className="flex items-center mb-20">
            <span className="h-5 w-5 border-2 border-gray-500 rounded-full mr-3 bg-transparent"></span>
            <h3 className="font-bold text-xl">Confirm Details</h3>
          </li>
          <div className="absolute left-2 top-[131px] h-[37%] w-1 bg-gray-500"></div>

          <li className="flex items-center">
            <span className="h-5 w-5 border-2 border-gray-500 rounded-full mr-3 bg-transparent"></span>
            <h3 className="font-bold text-xl">Payment</h3>
          </li>
        </ul>
      </div>

      {/* Right Section: Membership Details */}
      <div className="w-3/5">
        <h2 className="text-2xl font-bold mb-10">Membership Details</h2>

        <div className="flex justify-between mb-10">
          <div className="w-1/2 pr-2">
            <label className="block">City:</label>
            <p>Delhi NCR</p>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block">Country:</label>
            <p>India</p>
          </div>
        </div>

        <div className="mb-10">
          <label className="block">Membership Name:</label>
          <span>LWL Membership</span>
        </div>

        {/* Promo Code Input Row */}
        <div className="flex items-center mt-5 gap-4 mb-10 max-w-[60%]">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-1 p-2 border rounded-full border-gray-300"
          />
          <button className="bg-gray-400 text-white py-2 px-4 rounded-full max-w-[200px] w-full hover:bg-blue-600">
            Apply
          </button>
        </div>
        <div className="duration mt-5 flex flex-col gap-3">
          <label htmlFor="">Duration of Membership</label>
          <div className='max-w-[200px] w-full'>
          <select name="" id="" className='w-full outline-0 border-b-2'>
            <option value="">Select</option>
          </select>
          </div>

          <div className="flex gap-5 mt-3">
            <label htmlFor="" className='font-bold'>Base Membership Fee:</label> 
            <span>₹ XXXXX</span>
          </div>
          <div className="flex gap-5 mt-3">
            <label htmlFor="" className='font-bold'>Total Membership Fee</label> 
            <span>₹ XXXXX</span>
          </div>
          <div className="flex gap-5 mt-3">
            <label htmlFor="" className='font-bold'>Promo Discount</label> 
            <span>0</span>
          </div>
          <div className="flex gap-5 mt-3">
            <label htmlFor="" className='font-bold'>GST</label> 
            <span>18%</span>
          </div>
        </div>
        <div className="personal-details mt-5">
          <h2 className="text-2xl font-bold mb-10">Personal Details</h2>
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
        <div className="gst-details mt-5">
          <h2 className="text-2xl font-bold mb-10">GST Details</h2>
          <div className='flex gap-2 mb-3'>
            <input type="checkbox" />
            <label htmlFor="" className='font-bold'>I want to provide my GST Details(Optional)</label>
          </div>
          <div className='flex flex-row gap-4 mb-10'>
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='GST Number' />
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Company Name' />
          </div>
          <div className='flex gap-4 mb-10'>
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Address line 1 ' />
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Address line 2 ' />
          </div>
          <div className='flex gap-4 mb-10'>
            <select className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' name="" id="">
              <option value="">State</option>
            </select>
            <input className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' type="text" placeholder='Pincode' />
          </div>
          <div className='flex gap-4 mb-10'>
            <select className='max-w-[50%] h-[40px] w-full outline-none border-b-[1px] border-black' name="" id="">
              <option value="">Country</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Memberdetails