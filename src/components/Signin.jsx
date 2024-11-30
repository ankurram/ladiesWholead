import React, { useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signin = () => {
    const [isOpen, setIsOpen] = useState(true);

    // Function to close the popup
    const closePopup = () => {
        setIsOpen(false);
    };
  return (
    <div>
        {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-[40%] bg-white border-[10px] border-black p-[50px] rounded-3xl shadow-lg">
                        {/* Close Icon */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <h2 className="text-4xl font-bold mb-4 text-center">Sign In</h2>
                        <p className="text-gray-600 mb-8 text-[25px] leading-[1.5] font-semibold text-center">
                            Sign In in order to complete your payment and book your slot
                        </p>

                        <form className="space-y-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <div className='w-fit mx-auto'>
                            <button
                                type="submit"
                                className="w-[200px] h-12 rounded-full bg-[#c34569] text-white font-semibold hover:bg-pink-600 transition duration-200"
                            >
                                Sign In
                            </button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-gray-600">
                            <a href="#" className="text-black text-[22px] font-semibold underline">Click here if not a member</a>
                        </p>
                        
                    </div>
                </div>
            )}
    </div>
  )
}

export default Signin