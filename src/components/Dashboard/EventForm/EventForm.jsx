import './EventForm.scss';
import { useState } from 'react';
import axios from 'axios';

const EventForm = ({ addEvent, setShowForm }) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventLocation, setEventLocation]= useState('');
    const [guestCount, setGuestCount] = useState('');
    const [eventTheme, setEventTheme] = useState('');

    const handleSubmit = () => {
        if (eventName && eventDate && eventTime && eventLocation && guestCount && eventTheme) {
            addEvent({ name: eventName, date: eventDate, eventTime: eventTime, eventLocation: eventLocation, guestsNumber: guestCount, theme: eventTheme }); 

            axios
                .post(`http://localhost:3031/dashboard`, {
                    eventName: eventName,
                    eventDate: eventDate,
                    eventTime: eventTime,
                    eventLocation: eventLocation,
                    guestsNumber: guestCount,
                    eventTheme: eventTheme,
                }, {
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success', response.data);

                    addEvent(response.data);

                    setEventName('');
                    setEventDate('');
                    setEventTime('');
                    setEventLocation('');
                    setGuestCount('');
                    setEventTheme('');
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
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <input  
                    type='date'
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />
                <input  
                    type='time'
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                />
                <input  
                    type='location'
                    placeholder='Address'
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                />
                <input  
                    type='guestsNumber'
                    placeholder='Guest Count'
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                />
                <input  
                    type='theme'
                    placeholder='Theme & Decor'
                    value={eventTheme}
                    onChange={(e) => setEventTheme(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default EventForm;