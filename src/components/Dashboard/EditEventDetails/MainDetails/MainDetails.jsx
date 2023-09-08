import './MainDetails.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import EditIcon from '../../../../assets/Icons/Edit.svg';

const MainDetails = ({ eventId, onSave}) => {
    const [editedEvent, setEditedEvent] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if(eventId) {
            axios
                .get(`http://localhost:3031/dashboard/${eventId}`)
                .then(response => {
                    const eventWithId = response.data;
                    setEditedEvent({ ...eventWithId, id: eventId })
                })
                .catch(error => {
                    console.error('Error fetching data', error)
                })
        }
    }, [eventId])

    // useEffect(() => {
    //     if (!event) {
    //         axios
    //             .get(`http://localhost:3031/dashboard/${eventId}`)
    //             .then(response => {
    //                 const eventWithId = { ...response.data, id: eventId }
    //                 setEditedEvent(eventWithId)
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data', error)
    //             })
    //         }
    //     }, [eventId, event]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditedEvent({
    //         ...editedEvent,
    //         [name]: value,
    //     })
    // };

    // To update the state of event box details after clicking on the EventBox WORKS!
    // useEffect(() => {
    //     if (event) {
    //         setEventDetails(event)
    //     } else if (eventId) {
    //         axios
    //             .get(`http://localhost:3031/dashboard/${eventId}`)
    //             .then(response => {
    //                 console.log('response data:', response.data);
    //                 const eventWithId = response.data;
    //                 setEventDetails({ ...eventWithId, id: eventId });
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data', error)
    //             })
    //         }
    //     }, [eventId, event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent({
            ...editedEvent,
            [name]: value,
        })
    };

    // To handle the edit button click
    const handleEditClick = () => {
        setIsEditing(true)  // To enable editing mode
    };

    const handleSave = () => {
        setIsEditing(false);
        onSave(editedEvent);
        // onSave(editedEvent);
    };

    return (
        <div className='edit-event-details'>
            <div className='sub-header'>
                <img src={EditIcon} alt='Edit Event Icon' className='navIcon'/> 
                <h2>Edit Main Details</h2>
            </div>
            
            <form>
                <label>
                    Event Name: 
                    <input
                        type='text'
                        name='eventName'
                        value={editedEvent.eventName || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Event Date:
                    <input
                        type='text'
                        name='eventDate'
                        value={editedEvent.eventDate || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Event Time:
                    <input
                        type='text'
                        name='eventTime'
                        value={editedEvent.eventTime || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Event Location:
                    <input
                        type='text'
                        name='eventLocation'
                        value={editedEvent.eventLocation || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Anticipated Attendee #:
                    <input
                        type='text'
                        name='guestsCount'
                        value={editedEvent.guestsCount || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Event Theme:
                    <input
                        type='text'
                        name='eventTheme'
                        value={editedEvent.eventTheme || ''}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                {isEditing ? (
                    <button className="save-btn" onClick={handleSave}>Save</button>
                ) : (
                    <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                )}
            </form>
            <div className='btn-container'>
                
            </div>
        </div>
    )
}

export default MainDetails;
