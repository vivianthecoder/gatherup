import './Dashboard.scss';
import EventBox from '../../components/Dashboard/EventBox/EventBox';
import EventForm from '../../components/Dashboard/EventForm/EventForm';
import { useState, useEffect } from 'react';
import AddEventIcon from '../../assets/Icons/Add_square.svg';
// import { useParams } from 'react-router';
import axios from 'axios';

const Dashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState([]);
    // const { id } = useParams();

    function eventListRequest() {
        axios
            .get(`http://localhost:3031/dashboard`)
            .then(response => {
                console.log('Successfully received data', response.data)
                setEvents(response.data)
            }).catch((error) => console.log('Failed fetching data', error)
        );
    }

    useEffect(() => {
        eventListRequest();
    }, []);

    const addEvent = (newEvent) => {
        setEvents([...events, {
            eventName: newEvent.eventName,
            eventDate: newEvent.eventDate,
            eventTime: newEvent.eventTime,
            eventLocation: newEvent.eventLocation,
            guestsNumber: newEvent.guestsNumber,
            eventTheme: newEvent.eventTheme 
        }])
    };

    console.log('Events:', events);

    return (
        <div className='dashboard-content'>
            <h1 className='title'>Dashboard</h1>
            <div className='event-container'>
                <div className='event-creation-box'>
                    <button className='first-add-btn' onClick={() => setShowForm(true)}>
                        <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                        Create Event
                    </button>
                    {showForm && <EventForm addEvent={addEvent} setShowForm={setShowForm} />}
                </div>
                {events.map((event, index) => (
                    <EventBox 
                        key={index} 
                        eventName={event.eventName} 
                        eventDate={event.eventDate} 
                        eventListRequest={eventListRequest}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;