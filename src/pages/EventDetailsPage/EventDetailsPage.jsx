import './EventDetailsPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainDetails from '../../components/Dashboard/EditEventDetails/MainDetails/MainDetails';
import FoodAndBev from '../../components/Dashboard/EditEventDetails/FoodAndBev/FoodAndBev';
import ThemeAndDecor from '../../components/Dashboard/EditEventDetails/ThemeAndDecor/ThemeAndDecor';
import AttendeeList from '../../components/Dashboard/EditEventDetails/AttendeeList/AttendeeList';
import Collaborators from '../../components/Dashboard/EditEventDetails/Collaborators/Collaborators';
import Media from '../../components/Dashboard/EditEventDetails/Media/Media';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
    // To store state variables
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventDetails, setEventDetails] = useState({});
    const [formData, setFormData] = useState({
        eventId: '',
        eventName: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        guestsCount: '',
        eventTheme: '',
        eventImage: '',
        eventAgenda: '',
    });
    const [selectedNavItem, setSelectedNavItem] = useState('Main Details');
    const { id } = useParams();

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
               const eventData = response.data;
               setFormData({
                eventId: eventData.id,
                eventName: eventData.eventName || '',
                eventDate: eventData.eventDate || '',
                eventTime: eventData.eventTime || '',
                eventLocation: eventData.eventLocation || '',
                guestsCount: eventData.guestsCount || '',
                eventTheme: eventData.eventTheme || '',
                eventImage: eventData.eventImage || '',
                eventAgenda: eventData.eventAgenda || '',
               });
           }).catch((error) => console.log(error));
   }

    // To update new event details to the server
    const updateMainDetailsData = (updatedMainDetails) => {
        const updatedFormData = {
            ...formData,
            eventId: updatedMainDetails.eventId,
            eventName: updatedMainDetails.eventName,
            eventDate: updatedMainDetails.eventDate,
            eventTime: updatedMainDetails.eventTime,
            eventLocation: updatedMainDetails.eventLocation,
            guestsCount: updatedMainDetails.guestsCount,
            eventTheme: updatedMainDetails.eventTheme,
            eventImage: updatedMainDetails.eventImage,
            eventAgenda: updatedMainDetails.eventAgenda,
        };

        axios.put(`http://localhost:3031/dashboard/${formData.eventId}`, updatedFormData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setEventDetails(response.data);
                console.log('Event data updated on the server', response.data);
            })
            .catch(error => {
                console.error('Error updating event data on the server', error)
            });
    };

    // To handle clicking event editing nav bar
    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
    };

    // To fetch selected event id whenever the id is changed with selectedEvent
    useEffect(() => {
        selectedEventRequest(id);
    }, [id]);

    // To fetch list of all events from the server
    useEffect(() => {
        eventListRequest();
    }, [selectedEvent]);

    useEffect(() => {
        // Check if the selectedNavItem is "Main Details" and there's a selectedEvent
        if (selectedNavItem === 'Main Details' && selectedEvent) {
            // Update the formData state with the selectedEvent data
            setFormData({
                eventId: selectedEvent.id,
                eventName: selectedEvent.eventName || '',
                eventDate: selectedEvent.eventDate || '',
                eventTime: selectedEvent.eventTime || '',
                eventLocation: selectedEvent.eventLocation || '',
                guestsCount: selectedEvent.guestsCount || '',
                eventTheme: selectedEvent.eventTheme || '',
                eventImage: selectedEvent.eventImage || '',
                eventAgenda: selectedEvent.eventAgenda || '',
              });
            }
          }, [selectedEvent, selectedNavItem]);

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
                            onClick={() => handleNavItemClick('Theme & Decor')}>
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
                        {/* Hamburger drop down for continued sections */}
                        <li 
                            className={`sub-nav-text' sub-nav-text ${selectedNavItem === '...' ? 'selected' : ''}`}
                            onClick={() => handleNavItemClick('...')}>
                            ...
                        </li>
                    </ul>
                </nav>

                <div className='details-container'>
                    {selectedNavItem === 'Main Details' && (
                        <MainDetails 
                            formData={formData}
                            setFormData={setFormData}
                            events={events}
                            setEvents={setEvents}
                            onSave={updateMainDetailsData}
                            eventId={formData.id} 
                            setEventDetails={setEventDetails}
                            eventDetails={eventDetails}
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
                            events={events}
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