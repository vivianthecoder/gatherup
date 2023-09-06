import './EventDetails.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetails = ({ event, eventId, closeEventDetails }) => {
    const [eventDetails, setEventDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if(event) {
            setEventDetails(event)
        } else {
            axios
                .get(`http://localhost:3031/events/${eventId}`)
                .then(response => {
                    setEventDetails(response.data)
                })
                .catch(error => {
                    console.error('Error fetching data', error)
                })
            }
        }, [eventId, event]);

    const handleEditClick = () => {
        setIsEditing(true)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        })
    };

    const handleSubmit = () => {
        axios 
            .put(`http://localhost:3031/events/${eventDetails.id}`, eventDetails)
            .then(response => {
                setEventDetails(response.data)
                setIsEditing(false)
            })
            .catch(error => {
                console.error('Error updating event data', error);
            })
    };

    if(!eventDetails) {
        return <div>Loading...</div>
    }

    return (
        <div className='overlay'>
            <div className='event-form'>
                <button className='exit-btn' onClick={() => closeEventDetails(false)}>X</button>
                <h3>{eventDetails.eventName}</h3>
                {!isEditing ? (
                    <div>
                        <p>Event Name: {eventDetails.eventName}</p>
                        <p>Date: {eventDetails.eventDate}</p>
                        <p>Time:  {eventDetails.eventTime}</p>
                        <p>Location: {eventDetails.eventLocation}</p>
                        <p>Attendee #: {eventDetails.guestsNumber}</p>
                        <p>Theme & Decor: {eventDetails.eventTheme}</p>
                        <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                    </div>
                ) : ( 
                    <div>
                        <input
                            type='text'
                            name='eventName'
                            value={eventDetails.eventName}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='eventDate'
                            value={eventDetails.eventDate}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='eventTime'
                            value={eventDetails.eventTime}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='eventLocation'
                            value={eventDetails.eventLocation}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='guestsNumber'
                            value={eventDetails.guestsNumber}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='eventTheme'
                            value={eventDetails.eventTheme}
                            onChange={handleChange}
                        />
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventDetails;