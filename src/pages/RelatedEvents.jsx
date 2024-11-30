import { faBookmark, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const RelatedEvents = ({apiUrl, category}) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch(apiUrl)
        .then(response => response.json())
            .then(data => {
                const filteredEvents = data.data.filter(event => event.categories === category);
                setEvents(filteredEvents);
                console.log("Related data: ", filteredEvents)
                setLoading(false);
            })
            .catch(error=>{
                setError('Failed to load related events');
                setLoading(false);
                console.log(error);
            })
    },[apiUrl, category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div>
  <div className="bg-gray-50">
    <div className="container mx-auto">
      <div className="title my-5">
        <h2 className="text-4xl">More Events</h2>
      </div>
      <div className="flex flex-wrap">
        {events.length > 0 ? (
          events.map((event) => (
            <div 
              className="card-box w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] p-2 h-auto" 
              key={event.id}
            >
              <div className="bg-white h-full flex flex-col justify-between rounded-xl shadow-xl">
                <div className="thumbnail relative h-[300px]">
                  <img 
                    src={event.image ? `https://lwl.kinminds.online/${event.image}` : '/path/to/placeholder.png'} 
                    alt={event.name} 
                    className="w-full rounded-t-xl h-full object-cover"
                    onError={(e) => { e.target.src = '/path/to/placeholder.png'; }}
                  />
                  <div className="bookmark-icon absolute top-2 right-2">
                    <button>
                      <FontAwesomeIcon icon={faBookmark} className="text-gray-400 hover:text-yellow-500" />
                    </button>
                  </div>
                </div>
                <div className="card-content mt-2 p-4 gap-2 flex flex-col">
                  <h4 className="font-bold text-lg">
                    <Link to={`/event/${event.id}`} className="hover:underline">
                      {event.name}
                    </Link>
                  </h4>
                  <div className="text-gray-400 flex gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 text-xl" />
                    {event.date}
                  </div>
                </div>
                <div className="mt-2 block">
                  <div className="text-gray-500 p-4 border-t-[1px] w-full border-black block">
                    {event.category.name || 'No category available'}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No related events found.</p>
        )}
      </div>
    </div>
  </div>
</div>

  )
}

export default RelatedEvents