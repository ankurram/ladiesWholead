import React from 'react'
import AboutEvents from '../data/AboutEvents.json';

const AboutEvent = ({aboutEvents}) => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-4xl py-4'>About The Event</h2>
            <h3>{aboutEvents.name}</h3>
            <p>{aboutEvents.description}</p>
        </div>
    </div>
  )
}

export default AboutEvent