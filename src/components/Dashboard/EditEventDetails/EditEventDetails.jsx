import './EditEventDetails.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const EditEventDetails = ({ event, eventId, onSave, onCancel }) => {
    const [editedEvent, setEditedEvent] = useState(event);

    useEffect(() => {
        if (event) {
            setEditedEvent(event)
        } else {
            axios
                .get(`http://localhost:3031/dashboard/${eventId}`)
                .then(response => {
                    const eventWithId = { ...response.data, id: eventId }
                    setEditedEvent(eventWithId)
                })
                .catch(error => {
                    console.error('Error fetching data', error)
                })
            }
        }, [eventId, event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent({
            ...editedEvent,
            [name]: value,
        })
    };

    const handleSave = () => {
        onSave(editedEvent)
    };

    return (
        <div className='edit-event-details'>
            <h2>Edit Event Details</h2>
            <form>
                <label>
                    Event Name: 
                    <input
                        type='text'
                        name='eventName'
                        value={editedEvent.eventName || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Event Date:
                    <input
                        type='text'
                        name='eventDate'
                        value={editedEvent.eventDate || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Event Time:
                    <input
                        type='text'
                        name='eventTime'
                        value={editedEvent.eventTime || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Event Location:
                    <input
                        type='text'
                        name='eventLocation'
                        value={editedEvent.eventLocation || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Guest Count:
                    <input
                        type='text'
                        name='guestsNumber'
                        value={editedEvent.guestsNumber || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Event Theme:
                    <input
                        type='text'
                        name='eventTheme'
                        value={editedEvent.eventTheme || ''}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <div className='btn-container'>
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="next-btn" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default EditEventDetails;
