import './Dashboard.scss';
import EventBox from '../../components/Dashboard/EventBox/EventBox';
import EventForm from '../../components/Dashboard/EventForm/EventForm';
import { useState, useEffect } from 'react';
import AddEventIcon from '../../assets/Icons/Add_square.svg';
import axios from 'axios';
import format from 'date-fns/format';

const Dashboard = () => {
    // To create the new event form state
    const [showForm, setShowForm] = useState(false);
    // To create the events array
    const [events, setEvents] = useState([]);
    // To display selected event
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query)
    };

    // To get data from all events
    function eventListRequest() {
        axios
            .get(`http://localhost:3031/dashboard`)
            .then(response => {
                console.log('Successfully received data', response.data)
                setEvents(response.data)
            }).catch((error) => console.log('Failed fetching data', error)
        );
    }

    useEffect(() => {
        eventListRequest();
    }, []);

    // To push the newEvent object onto the setEvents array with updated fields
    const addEvent = (newEvent) => {
        setEvents([...events, {
            eventName: newEvent.eventName,
            eventDate: newEvent.eventDate,
            eventTime: newEvent.eventTime,
            eventLocation: newEvent.eventLocation,
            guestsNumber: newEvent.guestsNumber,
            eventTheme: newEvent.eventTheme 
        }])
    };

    if (!setEvents) {
        return<p>Loading...</p>
    };

    console.log('Events:', events);

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
                        {showForm && <EventForm addEvent={addEvent} setShowForm={setShowForm} />}
                    </div>
                    {events
                    .filter((event) =>
                        event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                    .map((event, index) => (
                        <EventBox 
                            key={index} 
                            eventName={event.eventName} 
                            eventDate={format(new Date(event.eventDate), 'MMMM d, yyyy')} 
                            eventTime={event.eventTime}
                            eventListRequest={eventListRequest}
                        />
                    ))}
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

export default Dashboard;