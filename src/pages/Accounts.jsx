import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Accounts = ({data}) => {
  return (
    <div className='container mx-auto my-[50px]'>
    <div className="search-box flex items-center justify-center mb-8">
        <div className="relative w-full max-w-[90%]">
            <input
                type="text"
                placeholder="Search..."
                className="w-full h-12 pl-5 pr-12 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
        </div>
    </div>

    <div className='flex flex-wrap gap-5 lg:gap-[80px]'>
        {
            data.map((accountInfo, index) => {
                return (
                    <div 
                        className='w-full h-[300px] rounded-[100px] text-[35px] sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-80px)] bg-[#89616a] text-white flex items-center justify-center p-4'
                        key={index}
                    >
                        {accountInfo.title}
                    </div>
                );
            })
        }
    </div>
</div>

  )
}
