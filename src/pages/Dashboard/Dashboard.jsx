import './Dashboard.scss';
import EventBox from '../../components/Dashboard/EventBox/EventBox';
import EventForm from '../../components/Dashboard/EventForm/EventForm';
import { useState } from 'react';
import AddEventIcon from '../../assets/Icons/Add_square.svg';

const Dashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState([]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    console.log(events);

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
                    <EventBox key={index} name={event.name} date={event.date} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;