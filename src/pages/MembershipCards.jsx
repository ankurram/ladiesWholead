import React from 'react'
import Membership from '../components/Membership'
import MemberShipData from '../data/MembershipData.json';

const MembershipCards = () => {
  return (
    <div className='container mx-auto'>
        <h3 className='membership-title text-center'>Choose Your Membership</h3>
        <Membership MemberShipData={MemberShipData} />
    </div>
  )
}

export default MembershipCards