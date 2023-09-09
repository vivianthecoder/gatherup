import './MainDetails.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import EditIcon from '../../../../assets/Icons/Edit.svg';

const MainDetails = ({ event, eventId, formData, setFormData, onUpdateEventData }) => {
    const [eventDetails, setEventDetails] = useState({});

    // To update the state of event box details
    useEffect(() => {
        if (event) {
            setEventDetails(event) 
        } else if (eventId) {
            axios
                .get(`http://localhost:3031/dashboard/${eventId}`)
                .then(response => {
                    const eventWithId = response.data;
                    setEventDetails({ ...eventWithId, id: eventId });
                    console.log('Fetched event details:', eventWithId);
                })
                .catch(error => {
                    console.error('Error fetching data', error)
                })
            }
        }, [eventId, event]);

    // To handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    // To handle the form submission
    const handleSave = () => {
        axios
        .put(`http://localhost:3031/dashboard/${formData.eventId}`, formData, {
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then((response) => {
            setFormData(response.data)
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
                    <h2>Edit Main Details</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
            
            <div className='main-info-container'>
                <label className='main-info-box'>
                    Name: 
                    <input
                        className='input-box'
                        type='text'
                        name='eventName'
                        value={formData.eventName || eventDetails.eventName || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Date:
                    <input
                        className='input-box'
                        type='text'
                        name='eventDate'
                        value={formData.eventDate || eventDetails.eventDate || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Time:
                    <input
                        className='input-box'
                        type='text'
                        name='eventTime'
                        value={formData.eventTime || eventDetails.eventTime || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Location:
                    <input
                        className='input-box'
                        type='text'
                        name='eventLocation'
                        value={formData.eventLocation || eventDetails.eventLocation || ''}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default MainDetails;
