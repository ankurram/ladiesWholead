import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MemberCards from '../components/MemberCards';
import MemberData from '../data/MemberData.json';
import AboutEvent from '../components/AboutEvent';
import UpcomingEvents from './UpcomingEvents';
import Signin from '../components/Signin';
import RelatedEvents from './RelatedEvents';

const SingleEvents = ({apiUrl}) => {
    const {id} = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`${apiUrl}/${id}`)
        .then(response =>{
            if(!response.ok){
                throw new Error('Failed to fetch event details')
            }
            return response.json();
        })
        .then(data =>{
            console.log("Event details response:", data);
            setEvent(data);
            setLoading(false)
        })
        .catch(error =>{
            console.log("Error fetching events details:", error);
            setError(error.message);
            setLoading(false)
        })
    },[apiUrl, id]);

    if(loading) return <p>Loading....</p>
    if(error) return <p>Error: {error}</p>
    if(!event) return <p>Event not found</p>

    
  return (
    <div>
        {/* Top Breadcrumb */}
        <div className='bg-[#1689a3]'>
            <div className='container mx-auto'>
                <div className='singleEvents py-5 flex flex-col gap-2'>
                    <h4 className='eventTitle'>{event.name}</h4>
                    <div className='flex flex-col gap-3'>
                        <div className='eventDate flex gap-2'>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xl" />
                            {event.event_date} | {event.start_time} to {event.end_time} IST
                        </div>
                        <div className='eventAddress flex gap-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                            {event.address}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='flex gap-2 my-10'>
                <div className='max-w-[80%] w-full'>
                    <MemberCards MemberData={MemberData} />
                </div>
                <div className='max-w-[20%] w-full'>
                    <div>
                        <div className='border-[1px] max-w-fit p-3 border-black'>
                            Event Id: {event.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='flex gap-2 justify-end my-10 max-w-[80%]'>
                <div className='max-w-[70%] flex justify-end w-full'>
                    <form action="" className='max-w-[50%] w-full'>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Amount (INR)</div>
                            <div>1995</div>
                        </div>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Convenience Fee (INR) +</div>
                            <div>29.50</div>
                        </div>
                        <div className='flex border-t-[1px] border-gray-300 py-5'>
                            <div className='font-bold text-teal-600'>Have Discount Code ?</div>
                        </div>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Total Amount(INR)</div>
                            <div>2025</div>
                        </div>
                        <div className='flex border-t-[1px] border-gray-300 justify-end py-5'>
                            <button className='bg-[#1689a3] p-3 max-w-[150px] w-full rounded-lg text-white'>Book Now</button>
                        </div>
                    </form>
                </div>
                <div className='max-w-[30%] w-full'></div>
            </div>
            <div className='max-w-[20%] w-full'></div>
        </div>
        <div className='container mx-auto'>
            <AboutEvent aboutEvents={event} />

            <RelatedEvents apiUrl={`${apiUrl}`} category={event.category}  />
        </div>
        <Signin/>
    </div>
  )
}

export default SingleEvents