import './EventForm.scss';
import { useState } from 'react';
import axios from 'axios';

const EventForm = ({ addEvent, setShowForm }) => {
    // To create a new event object
    const [event, setEvent] = useState({
        eventName: '',
        eventDate:'',
        eventTime: '',
        eventLocation: '',
        guestsNumber: '',
        eventTheme: ''
    });

    // To handle changes in form fields and update the event object
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value   
        });
    };

    // To handle the submit button clicked in the new event form field
    const handleSubmit = () => {
        // To check if all form fields are filled
        if (
            event.eventName && 
            event.eventDate && 
            event.eventTime && 
            event.eventLocation && 
            event.guestsNumber && 
            event.eventTheme
        ) {
            // To post the data to our server data
            axios
                .post(`http://localhost:3031/dashboard`, event, {
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success', response.data);
                    addEvent(response.data);

                    setEvent({
                        eventName: '',
                        eventDate: '',
                        eventTime: '',
                        eventLocation: '',
                        guestsNumber: '',
                        eventTheme: ''
                    });
                    // To close the form
                    setShowForm(false);
                })
                .catch(error => {
                    console.error('Error',  error);
                })
        }
    };

    return (
        <div className='overlay'>
            <div className='event-form'>
                <button className='exit-btn' onClick={() => setShowForm(false)}>X</button>
                <h3>Yay! A New Event</h3>
                <input
                    type='text'
                    placeholder='Event Name'
                    name='eventName'
                    value={event.eventName}
                    onChange={handleChange}
                />
                <input  
                    type='date'
                    name='eventDate'
                    value={event.eventDate}
                    onChange={handleChange}
                />
                <input  
                    type='time'
                    name='eventTime'
                    value={event.eventTime}
                    onChange={handleChange}
                />
                <input  
                    type='text'
                    placeholder='Address'
                    name='eventLocation'
                    value={event.eventLocation}
                    onChange={handleChange}
                />
                <input  
                    type='number'
                    placeholder='Guest Count'
                    name='guestsNumber'
                    value={event.guestsNumber}
                    onChange={handleChange}
                />
                <input  
                    type='text'
                    placeholder='Theme & Decor'
                    name='eventTheme'
                    value={event.eventTheme}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default EventForm;