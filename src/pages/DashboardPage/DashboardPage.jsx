import './DashboardPage.scss';
import EventBox from '../../components/Dashboard/EventBox/EventBox';
import NewEventForm from '../../components/Dashboard/NewEventForm/NewEventForm';
import { useState, useEffect } from 'react';
import AddEventIcon from '../../assets/Icons/Add_square.svg';
import axios from 'axios';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';

const DashboardPage = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState([]);
    const [showForm, setShowForm] = useState(false);
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

    // To push the newEvent object onto the setEvents array with updated fields WORKS!
    const addEvent = (newEvent) => {
        setEvents([...events, {
            eventName: newEvent.eventName,
            eventDate: newEvent.eventDate,
            eventTime: newEvent.eventTime,
            eventLocation: newEvent.eventLocation,
            guestsCount: newEvent.guestsCount,
            eventTheme: newEvent.eventTheme,
            eventImage: newEvent.eventImage
        }])
    };

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
                <h1 className='title'>Dashboard</h1>
                <h2 className='sub-title'>My Events</h2>
                <div className='event-container'>
                    <div className='event-creation-box'>
                        <button className='first-add-btn' onClick={() => setShowForm(true)}>
                            <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                            <h3>Create Event</h3>
                        </button>
                        {showForm && <NewEventForm addEvent={addEvent} setShowForm={setShowForm} />}
                    </div>
                    {events
                    .filter((event) =>
                        event.eventName && 
                        event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) && 
                        new Date(event.eventDate) >= today
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
                <div>
                <h3 className='instructions-title'>How To Get Started!</h3>
                    <p>1. Dashboard: Click on "Create Event" to start.</p>
                    <p>2. Event Details: Fill in basic event information.</p>
                    <p>3. Add an Image (Optional).</p>
                    <p>4. Save and Edit More!</p>
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
    );
};

export default DashboardPage;