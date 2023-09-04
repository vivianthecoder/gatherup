import './EventForm.scss';
import { useState } from 'react';
import axios from 'axios';

const EventForm = ({ addEvent, setShowForm }) => {
    const [event, setEvent] = useState({
        eventName: '',
        eventDate:'',
        eventTime: '',
        eventLocation: '',
        guestsNumber: '',
        eventTheme: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value   
        });
    };

    const handleSubmit = () => {
        if (
            event.name && 
            event.date && 
            event.time && 
            event.eventLocation && 
            event.guestsNumber && 
            event.theme
        ) {
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