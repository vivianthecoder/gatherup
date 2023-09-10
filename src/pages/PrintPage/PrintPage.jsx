import PrintBox from '../../components/PrintBox/PrintBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';

const PrintPage = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { id } = useParams();

    // To handle search box
    const handleSearch = (query) => {
        setSearchQuery(query)
    };

    // To get event data from all events from the server
    function eventListRequest() {
         axios
             .get(`http://localhost:3031/dashboard`)
             .then(response => {
                 setEvents(response.data)
             }).catch((error) => console.log('Failed fetching data', error)
         );
     }

     // To get event id data from the server and set selected event in array
    function selectedEventRequest(eventId) {
        axios
            .get(`http://localhost:3031/dashboard/${eventId}`)
            .then(response => {
                setSelectedEvent(response.data)
                console.log(response.data)
            }).catch((error) => console.log(error));
    }

    // To fetch selected event id whenever the id is changed W/ selectedEvent
    useEffect(() => {
        selectedEventRequest(id);
    }, [id]);

    // To fetch list of all events from the server
    useEffect(() => {
        eventListRequest();
    }, [selectedEvent]);

    if (!events.length) {
        return<p>Loading...</p>
    };

    return (
        <div className='dashboard-content'>
            <div>
                <h1 className='title'>Print Event</h1>
                <h2 className='sub-title'>My Events</h2>
                <div className='event-container'>
                    {events
                    .filter((event) =>
                        event.eventName && 
                        event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate))
                    .map((event, index) => (
                        <PrintBox 
                            key={index} 
                            eventId={event.id}
                            eventName={event.eventName} 
                            eventDate={format(new Date(event.eventDate), 'MMMM d, yyyy')} 
                            eventTime={event.eventTime}
                            eventLocation={event.eventLocation}
                            guestsCount={event.guestsCount}
                            eventTheme={event.eventTheme}
                            eventImage={event.eventImage}
                            events={events}
                            setEvents={setEvents}
                        />
                    ))}
                </div>
                <div className='instructions-container'>
                <h3 className='instructions-title'>Print Instructions:</h3>
                    <p>1. Select from the drop down checkbox to add or remove details.</p>
                    <p>2. Click on the event box to print.</p>
                </div>
            </div>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search events...'
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default PrintPage;