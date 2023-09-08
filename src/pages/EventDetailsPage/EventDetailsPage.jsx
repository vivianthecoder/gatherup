import './EventDetailsPage.scss';
import { useState, useEffect } from 'react';
// import AddEventIcon from '../../assets/Icons/Add_square.svg';
import axios from 'axios';
import MainDetails from '../../components/Dashboard/EditEventDetails/MainDetails/MainDetails';
import AttendeeList from '../../components/Dashboard/EditEventDetails/AttendeeList/AttendeeList';
import Collaborators from '../../components/Dashboard/EditEventDetails/Collaborators/Collaborators';
import Media from '../../components/Dashboard/EditEventDetails/Media/Media';

const EventDetailsPage = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventDetails, setEventDetails] = useState({});

    // Event handlers
    const closeEventDetails = () => {
        setSelectedEvent(null)
    };

    // To get event data from all events
    function eventListRequest() {
         axios
             .get(`http://localhost:3031/dashboard`)
             .then(response => {
                 setEvents(response.data)
             }).catch((error) => console.log('Failed fetching data', error)
         );
     }

    const handleSaveEdit =(editedEvent) => {
        axios
            .put(`http://localhost:3031/dashboard/${editedEvent.id}`, editedEvent, {
                headers: {
                    'Content-Type': 'application.json',
                },
            })
            .then((response) => {
                eventListRequest();        
                setSelectedEvent(response.data)
            })
            .catch((error) => {
                console.error('Error updating event data', error)
            })
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
                <h1 className='title'>NAME OF EVENT</h1>
                <nav>
                    <ul className='sub-nav-container'>
                        <li className='sub-nav-text'>Main Details</li>
                        <li className='sub-nav-text'>Attendee List</li>
                        <li className='sub-nav-text'>Collaborators</li>
                        <li className='sub-nav-text'>Media</li>
                    </ul>
                </nav>

                <div className='event-container'>
                    <MainDetails 
                        event={eventDetails} 
                        eventId={eventDetails.id} 
                        onSave={handleSaveEdit}
                        // onCancel={() => setEditEventDetailsVisible(false)}
                        // closeEventDetails={closeEventDetails} 
                    />
                    <AttendeeList />
                    <Collaborators />
                    <Media />
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;