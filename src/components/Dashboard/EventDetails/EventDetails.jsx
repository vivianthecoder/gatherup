import './EventDetails.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventDetails = ({ event, eventId, setSelectedEvent, selectedEvent, eventListRequest, onUpdateEventData, closeEventDetails }) => {
    const [eventDetails, setEventDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    // eslint-disable-next-line 
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    // To update the state of event box details after clicking on the EventBox WORKS!
    useEffect(() => {
        if (event) {
            setEventDetails(event)
        } else if (eventId) {
            axios
                .get(`http://localhost:3031/dashboard/${eventId}`)
                .then(response => {
                    console.log('response data:', response.data);
                    const eventWithId = response.data;
                    setEventDetails({ ...eventWithId, id: eventId });
                })
                .catch(error => {
                    console.error('Error fetching data', error)
                })
            }
        }, [eventId, event]);

    // To handle the edit button click
    const handleEditClick = () => {
        setIsEditing(true)  // To enable editing mode
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        })
    };

    const handleImageChange= (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        console.log(setSelectedImage);
    };

    // To handle the form submission
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('eventDetails', JSON.stringify(eventDetails));

        if (selectedImage) {
            formData.append('eventImage', selectedImage)
        }

        axios 
            .put(`http://localhost:3031/dashboard/${eventDetails.eventId}`, eventDetails, {
                headers: {
                    'Content-Type' : 'application/json',
                },
            })
            .then(response => {
                setEventDetails(response.data)
                setIsEditing(false)
                onUpdateEventData(response.data)
                closeEventDetails();
            })
            .catch(error => {
                console.error('Error updating event data', error);
            })
    };

    const navigateToEditEvent = () => {
        navigate(`/dashboard/edit/${eventDetails.eventId}`)
    };

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!eventDetails) {
        return <div>Data not found...</div>
    }

    return (
        <div className='overlay' onClick={(e) => e.stopPropagation()}>
            <div className='event-form'>
                <button className='exit-btn' onClick={closeEventDetails}>
                    X
                </button>
                <h2>{eventDetails.eventName}</h2>
                <div className='img-container'>
                    <img src={eventDetails.eventImage} alt={eventDetails.eventName}/>
                    <label className='img-upload-label'>
                        <input
                            className='img-upload-input'
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        Upload Image
                    </label>
                </div>
                
                <h3>Event Overview</h3>
                {!isEditing ? (
                    <div>
                        <p>Date: {eventDetails.eventDate}</p>
                        <p>Time:  {eventDetails.eventTime}</p>
                        <p>Location: {eventDetails.eventLocation}</p>
                        <p>Attendee #: {eventDetails.guestsNumber}</p>
                        <p>Theme & Decor: {eventDetails.eventTheme}</p>
                        <button className="edit-btn" onClick={handleEditClick}>
                            Quick Edit
                        </button>
                    </div>
                ) : ( 
                    <div className='edit-mode'>
                        <input
                            type='text'
                            placeholder='Event Name'
                            name='eventName'
                            value={eventDetails.eventName || ''}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Event Date'
                            name='eventDate'
                            value={eventDetails.eventDate || ''}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Event Time'
                            name='eventTime'
                            value={eventDetails.eventTime || ''}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Event Location'
                            name='eventLocation'
                            value={eventDetails.eventLocation || ''}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Guest Count'
                            name='guestsNumber'
                            value={eventDetails.guestsNumber || ''}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Theme & Decor'
                            name='eventTheme'
                            value={eventDetails.eventTheme || ''}
                            onChange={handleChange}
                        />
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                )}
                <button
                    className='edit-link-btn'
                    onClick={navigateToEditEvent}>
                        Edit More Details
                </button>
            </div>
        </div>
    )
}

export default EventDetails;