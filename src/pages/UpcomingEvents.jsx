import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({apiUrl}) => {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("api response", data)
      setEvents(data.data);
    })
    .catch(error => console.log('Error fetching events:', error));
  },[apiUrl])
    
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto'>
        <div className="title my-5">
            <h2 className='text-4xl'>Upcoming Events</h2>
        </div>
        <div className='flex flex-wrap'>
        {events.map((event) => {
          return (
            <div className='card-box w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] p-2 h-auto' key={event.id}>
              <div className="bg-white h-full flex flex-col justify-between rounded-xl shadow-xl">
                <div className="thumbnail relative h-[300px]">
                  <img src={event.image ? `https://lwl.kinminds.online/${event.image}` : '/path/to/placeholder.png'} alt={event.name} className="w-full rounded-t-xl h-full object-cover" />
                  <div className="bookmark-icon absolute top-2 right-2">
                    {/* Add your bookmark icon here */}
                  </div>
                </div>
                <div className="card-content mt-2 p-4 gap-2 flex flex-col">
                <h4 className="font-bold text-lg">
                  <Link to={`/event/${event.id}`} className="hover:underline">{event.name}</Link>
                </h4>
                  <div className="text-gray-400 flex gap-2"><FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 text-xl" /> {event.date}</div>
                </div>
                <div className="mt-2 block">
                    {/* Placeholder for an icon */}
                    <div className="icon-placeholder mr-2">
                      {/* Insert your icon here */}
                    </div>
                    <div className="text-gray-500 p-4 border-t-[1px] w-full border-black block">{event.category.name}</div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    </div>
  )
}

export default UpcomingEvents