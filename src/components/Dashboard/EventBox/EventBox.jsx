import { useState } from 'react';
import './EventBox.scss';
import EventDetails from '../EventDetails/EventDetails';
import axios from 'axios';

const EventBox = ({ events, setEvents, eventId, eventName, eventDate, eventTime, eventLocation, guestsNumber, eventTheme, eventImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);

    // To drop down the top right nav WORKS!
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    // To display event details after clicking into event box WORKS!
    const handleEventClick = () => {
        setShowEventDetails(!showEventDetails)
    };

    // To update new event box from the server onto the screen WORKS!
    const updateEventData = (updatedEvent) => {
        const updatedEvents = events.map((eventItem) => {
            if (eventItem.id === updatedEvent.id) {
                return updatedEvent;
            }
            return eventItem;
        })
        setEvents(updatedEvents)

        axios.put(`http://localhost:3031/dashboard/${updatedEvent.id}, updatedEvent`)
            .then(response => {
                console.log('Event data updated on the server', response.data);
            })
            .catch(error => {
                console.error('Error updating event data on the server', error)
            });
    };
    
    // To handle deleting an event from the right nav WORKS!
    const deleteEvent = () => {
        axios
            .delete(`http://localhost:3031/dashboard/${eventId}`)
            .then(response => {
                console.log(response.data.message)

                const updatedEvents = events.filter(eventItem =>  eventItem.id != eventId);
                setEvents(updatedEvents);
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className='event-box'>
            <button onClick={toggleDropDown} className='dropdown-btn'>
                ...
            </button>
            {isOpen && (
                <div className={`dropdown-btn-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>Email Attendees</li>
                        <li>Archive</li>
                        <li onClick={deleteEvent}>Delete</li>
                    </ul>
                </div>
            )}
            <div className='event-box-details' onClick={() => handleEventClick(true)}>
                <h3>{eventName}</h3>
                <div>
                    <p>Date: {eventDate}</p>
                    <p>Time: {eventTime}</p>
                </div>
                {showEventDetails && (
                    <EventDetails 
                        event={{
                            eventId,
                            eventName,
                            eventDate,
                            eventTime,
                            eventLocation,
                            guestsNumber,
                            eventTheme,
                            eventImage
                        }}
                        onUpdateEventData={updateEventData}
                        closeEventDetails={() => setShowEventDetails(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default EventBox;