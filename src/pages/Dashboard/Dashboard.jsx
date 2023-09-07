import './Dashboard.scss';
import EventBox from '../../components/Dashboard/EventBox/EventBox';
import EventForm from '../../components/Dashboard/EventForm/EventForm';
import { useState, useEffect } from 'react';
import AddEventIcon from '../../assets/Icons/Add_square.svg';
import axios from 'axios';
import format from 'date-fns/format';
import EventDetails from '../../components/Dashboard/EventDetails/EventDetails';
import EditEventDetails from '../../components/Dashboard/EditEventDetails/EditEventDetails';

const Dashboard = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isEditEventDetailsVisible, setEditEventDetailsVisible] = useState(false);
    const [eventDetails, setEventDetails] = useState({});

    // Event handlers
    const closeEventDetails = () => {
        setSelectedEvent(null)
    };
    const handleSearch = (query) => {
        setSearchQuery(query)
    };
    const handleSaveEdit =(editedEvent) => {
        axios
            .put(`http://localhost:3031/dashboard/${editedEvent.id}`, editedEvent, {
                headers: {
                    'Content-Type': 'application.json',
                },
            })
            .then((response) => {
                eventListRequest();        
                setSelectedEvent(null)
            })
            .catch((error) => {
                console.error('Error updating event data', error)
            })
    };

    // // To get event data from all events
    function eventListRequest() {
         axios
             .get(`http://localhost:3031/dashboard`)
             .then(response => {
                 setEvents(response.data)
             }).catch((error) => console.log('Failed fetching data', error)
         );
     }

    // To push the newEvent object onto the setEvents array with updated fields
    const addEvent = (newEvent) => {
        setEvents([...events, {
            eventName: newEvent.eventName,
            eventDate: newEvent.eventDate,
            eventTime: newEvent.eventTime,
            eventLocation: newEvent.eventLocation,
            guestsNumber: newEvent.guestsNumber,
            eventTheme: newEvent.eventTheme,
            eventImage: newEvent.eventImage
        }])
    };

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
                            eventLocation={event.eventLocation}
                            guestsNumber={event.guestsNumber}
                            eventTheme={event.eventTheme}
                            eventImage={event.eventImage}
                        />
                    ))}

                    {selectedEvent && (
                        <EventDetails 
                            event={selectedEvent} 
                            eventId={selectedEvent.id} 
                            closeEventDetails={closeEventDetails} 
                        />
                    )}

                    {isEditEventDetailsVisible && (
                        <EditEventDetails 
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                            onSave={handleSaveEdit}
                            onCancel={() => setEditEventDetailsVisible(false)}
                            closeEventDetails={closeEventDetails} 
                        />
                    )}
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