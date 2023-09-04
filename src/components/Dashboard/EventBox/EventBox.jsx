import { useState } from 'react';
import './EventBox.scss';

const EventBox = ({ eventName, eventDate, eventTime, eventListRequest }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='event-box'>
            <button onClick={toggleDropDown} className='dropdown-btn'>
                ...
            </button>
            {isOpen && (
                <div className={`dropdown-btn-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>Email Attendees</li>
                        <li>Archive</li>
                        <li>Delete</li>
                    </ul>
                </div>
            )}
            <div className='event-box-details'>
                <h3>{eventName}</h3>
                <div>
                    <p>Date: {eventDate}</p>
                    <p>Time: {eventTime}</p>
                </div>
            </div>
        </div>
    )
}

export default EventBox;