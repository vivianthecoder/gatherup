import { useState } from 'react';
import './EventBox.scss';

const EventBox = ({ eventName, eventDate, eventListRequest }) => {

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
            <div>
                <h3>{eventName}</h3>
                <p>Date: {eventDate}</p>
            </div>
        </div>
    )
}

export default EventBox;