import { useState } from 'react';
import EventOverview from '../Dashboard/EventOverview/EventOverview';
import axios from 'axios';

const PrintBox = ({ events, setEvents, eventId, eventName, eventDate, eventTime, eventLocation, guestsCount, eventTheme, eventImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);

    const handlePrint = () => {
        window.print();
    }

    // To drop down the top right nav WORKS!
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    // To handle print event when clicking on the box
    const handleEventClick = () => {
        handlePrint();
    };

    const confirmDelete = () => {
        setIsConfirmDelete(true);
    };

    const cancelDelete = () => {
        setIsConfirmDelete(false);
        setIsOpen(false);
    }
    
    // To handle deleting an event from the right nav WORKS!
    const deleteEvent = () => {
        axios
            .delete(`http://localhost:3031/dashboard/${eventId}`)
            .then(response => {
                console.log(response.data.message)

                const updatedEvents = events.filter(eventItem =>  eventItem.id !== eventId);
                setEvents(updatedEvents);
                setIsConfirmDelete(false);
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
                        {isConfirmDelete ? (
                            <>
                                <li onClick={deleteEvent}>Confirm Delete</li>
                                <li onClick={cancelDelete}>Cancel</li>
                            </>
                        ) : (
                            <li onClick={confirmDelete}>Delete</li>
                        )}
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
                    <EventOverview 
                        event={{
                            eventId,
                            eventName,
                            eventDate,
                            eventTime,
                            eventLocation,
                            guestsCount,
                            eventTheme,
                            eventImage
                        }}
                        closeEventDetails={() => setShowEventDetails(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default PrintBox;