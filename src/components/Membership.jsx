import React from 'react'


const Membership = ({MemberShipData}) => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex gap-5'>
                {
                MemberShipData.map((data, index) => {
                    const isCenterCard = index % 3 === 1;
                    return (
                    <div key={index} className={`max-w-[calc(100%/3)] w-full membershipCard p-[25px] ${isCenterCard ? 'bg-[#fffaf2] border-2 border-[#ebd4b7]' : ''}`}>
                        <div className='text-3xl text-center pb-8 pt-5'>{data.title}</div>
                        <ul>
                        {data.benefits.map((benefit, benefitIndex) => (
                            <li className='list-icon-bg text-lg' key={benefitIndex}>{benefit}</li>
                        ))}
                        </ul>
                        <div className='flex pt-10 flex-col items-center justify-center text-[#c5456a] font-bold text-[30px]'>
                        ₹ {data.price}
                        <span className='text-[18px] font-light text-color'>+ Tax</span>
                        </div>
                        <div className='flex justify-center pt-9 pb-10'>
                            <button className='max-w-[200px] w-full bg-[#c5456a] p-4 text-white rounded-full'>Buy Now</button>
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Membership