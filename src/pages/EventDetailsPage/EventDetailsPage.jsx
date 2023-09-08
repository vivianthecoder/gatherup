import './EventDetailsPage.scss';
import { useState, useEffect } from 'react';
// import AddEventIcon from '../../assets/Icons/Add_square.svg';
import axios from 'axios';
import MainDetails from '../../components/Dashboard/EditEventDetails/MainDetails/MainDetails';
import FoodAndBev from '../../components/Dashboard/EditEventDetails/FoodAndBev/FoodAndBev';
import ThemeAndDecor from '../../components/Dashboard/EditEventDetails/ThemeAndDecor/ThemeAndDecor';
import AttendeeList from '../../components/Dashboard/EditEventDetails/AttendeeList/AttendeeList';
import Collaborators from '../../components/Dashboard/EditEventDetails/Collaborators/Collaborators';
import Media from '../../components/Dashboard/EditEventDetails/Media/Media';

const EventDetailsPage = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventDetails, setEventDetails] = useState({});
    const [selectedNavItem, setSelectedNavItem] = useState('Main Details');

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

    // To handle clicking event editing nav bar
    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
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
                        <li 
                            className={`sub-nav-text ${selectedNavItem === 'Main Details' ? 'selected' : ''}`}
                            onClick={() => handleNavItemClick('Main Details')}>
                            Main Details
                        </li>
                        <li 
                        className={`sub-nav-text' sub-nav-text ${selectedNavItem === 'FoodAndBev' ? 'selected' : ''}`}
                        onClick={() => handleNavItemClick('FoodAndBev')}>
                            F & B
                        </li>
                        <li 
                        className={`sub-nav-text' sub-nav-text ${selectedNavItem === 'Theme & Decor' ? 'selected' : ''}`}
                        onClick={() => handleNavItemClick('Media')}>
                            Theme & Decor
                        </li>
                        <li 
                            className={`sub-nav-text' sub-nav-text ${selectedNavItem === 'Attendee List' ? 'selected' : ''}`}
                            onClick={() => handleNavItemClick('Attendee List')}>
                            Attendee List
                        </li>
                        <li 
                        className={`sub-nav-text' sub-nav-text ${selectedNavItem === 'Collaborators' ? 'selected' : ''}`}
                        onClick={() => handleNavItemClick('Collaborators')}>
                            Collaborators
                        </li>
                        <li 
                        className={`sub-nav-text' sub-nav-text ${selectedNavItem === 'Media' ? 'selected' : ''}`}
                        onClick={() => handleNavItemClick('Media')}>
                            Media
                        </li>
                    </ul>
                </nav>

                <div className='event-container'>
                    {selectedNavItem === 'Main Details' && (
                        <MainDetails 
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                    {selectedNavItem === 'FoodAndBev' && (
                        <FoodAndBev
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                    {selectedNavItem === 'Theme & Decor' && (
                        <ThemeAndDecor
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                    {selectedNavItem === 'Attendee List' && (
                        <AttendeeList 
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                    {selectedNavItem === 'Collaborators' && (
                        <Collaborators 
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                    {selectedNavItem === 'Media' && (
                        <Media 
                            event={eventDetails} 
                            eventId={eventDetails.id} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;