import EventBox from '../../components/Dashboard/EventBox/EventBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';

const PreviousEventsPage = () => {

    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { id } = useParams();

    const today = new Date();

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
                <h1 className='title'>Previous Events</h1>
                <h2 className='sub-title'>My Events</h2>
                <div className='event-container'>
                    {events
                    .filter((event) =>
                        event.eventName && 
                        event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) && 
                        new Date(event.eventDate) < today
                        )
                    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
                    .map((event, index) => (
                        <EventBox 
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
            </div>
            <div>
                <h3 className='instructions-title'>Interested in past events?</h3>
                    <p>Look through your details to relive the planning!</p>
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

export default PreviousEventsPage;