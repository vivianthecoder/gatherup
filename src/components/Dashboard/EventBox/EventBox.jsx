import { useState } from 'react';
import './EventBox.scss';
import EventDetails from '../EventDetails/EventDetails';

const EventBox = ({ eventName, eventDate, eventTime, eventLocation, guestsNumber, eventTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    const handleEventClick = () => {
        setShowEventDetails(!showEventDetails)
    };

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
                        <li>Delete</li>
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
                            eventName,
                            eventDate,
                            eventTime,
                            eventLocation,
                            guestsNumber,
                            eventTheme,
                        }}
                        closeEventDetails={() => setShowEventDetails(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default EventBox;