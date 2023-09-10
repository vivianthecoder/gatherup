import { useState } from 'react';
import './EventBox.scss';
import EventOverview from '../EventOverview/EventOverview';
import axios from 'axios';
// import { format, parse } from 'date-fns';


const EventBox = ({ events, setEvents, eventId, eventName, eventDate, eventTime, eventLocation, guestsCount, eventTheme, eventImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);

    // eventDate={format(new Date(event.eventDate), 'MMMM d, yyyy')} 
    // eventTime={format(parse(event.eventTime, 'HH:mm', new Date()), 'h:mm a')}

    // To drop down the top right nav WORKS!
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    // To display event details after clicking into event box WORKS!
    const handleEventClick = () => {
        setShowEventDetails(!showEventDetails)
    };

    const confirmDelete = () => {
        setIsConfirmDelete(true);
    };

    const cancelDelete = () => {
        setIsConfirmDelete(false);
        setIsOpen(false);
    }

    // To update new event box details to the server WORKS!
    const updateEventData = (updatedEvent) => {
        const updatedEvents = events.map((eventItem) => {
            if (eventItem.id === updatedEvent.id) {
                return updatedEvent;
            }
            return eventItem;
        })
        setEvents(updatedEvents)

        axios.put(`http://localhost:3031/dashboard/${updatedEvent.id}`, updatedEvent)
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
                <h3 className='event-box-event-name'>{eventName}</h3>
                <div>
                    <p className='event-box-text'>Location: {eventLocation}</p>
                    <p className='event-box-text'>Date: {eventDate}</p>
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
                        onUpdateEventData={updateEventData}
                        closeEventDetails={() => setShowEventDetails(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default EventBox;