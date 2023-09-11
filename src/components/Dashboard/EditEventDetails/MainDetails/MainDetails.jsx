import './MainDetails.scss';
// import { useState } from 'react';
import axios from 'axios';
import EditIcon from '../../../../assets/Icons/Edit.svg';

const MainDetails = ({ events, eventId, eventDetails, setEventDetails, setEvents, formData, setFormData, onUpdateEventData }) => {
    // const [eventDetails, setEventDetails] = useState({});
    // const [showEventDetails, setShowEventDetails] = useState(false);

    // To update new event box details to the server WORKS!
    // const updateEventData = (updatedEvent) => {
    //     const updatedEvents = events.map((eventItem) => {
    //         if (eventItem.id === updatedEvent.id) {
    //             return updatedEvent;
    //         }
    //         return eventItem;
    //     })
    //     setEvents(updatedEvents)

    //     axios.put(`http://localhost:3031/dashboard/${updatedEvent.id}`, updatedEvent)
    //         .then(response => {
    //             console.log('Event data updated on the server', response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error updating event data on the server', error)
    //         });
    // };

    // To update the state of event box details
    // useEffect(() => {
    //     if (event) {
    //         setEventDetails(event) 
    //     } else if (eventId) {
    //         axios
    //             .get(`http://localhost:3031/dashboard/${eventId}`)
    //             .then(response => {
    //                 const eventWithId = response.data;
    //                 setEventDetails({ ...eventWithId, id: eventId });
    //                 console.log('Fetched event details:', eventWithId);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data', error)
    //             })
    //         }
    //     }, [eventId, event]);

    // To handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value,
        })
    };

    // To handle the form submission
    const handleSave = () => {
        axios
        .put(`http://localhost:3031/dashboard/${eventDetails.eventId}`, eventDetails, {
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then((response) => {
            setEventDetails(response.data)
            onUpdateEventData(response.data)
        })
        .catch((error) => {
          console.error('Error updating event details', error);
        });
    };

    return (
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={EditIcon} alt='Edit Event Icon' className='navIcon'/> 
                    <h2 className='edit-menu-title'>Edit Main Details</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
            
            <div className='main-info-container'>
                <label className='main-info-box'>
                    Name: 
                    <input
                        type='text'
                        name='eventName'
                        value={formData.eventName || eventDetails.eventName || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Date:
                    <input
                        type='text'
                        name='eventDate'
                        value={formData.eventDate || eventDetails.eventDate || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Time:
                    <input
                        type='text'
                        name='eventTime'
                        value={formData.eventTime || eventDetails.eventTime || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Location:
                    <input
                        type='text'
                        name='eventLocation'
                        value={formData.eventLocation || eventDetails.eventLocation || ''}
                        onChange={handleChange}
                    />
                </label>

                <h3 className='agenda-title'>Event Agenda</h3>
                <label className='agenda-box'>
                    <textarea
                        type='text'
                        name='eventAgenda'
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default MainDetails;
