import './PrintBox.scss'
import { useState } from 'react';
import EventOverview from '../Dashboard/EventOverview/EventOverview';
import axios from 'axios';

const PrintBox = ({ events, setEvents, eventId, eventName, eventDate, eventTime, eventLocation, guestsCount, eventTheme, eventImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);

    const handlePrint = () => {
        window.print();
    }

    // To drop down the top right nav WORKS!
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    // To handle print event when clicking on the box
    const handleEventClick = () => {
        handlePrint();
    };

    return (
        <div className='event-box'>
            <button onClick={toggleDropDown} className='dropdown-btn'>
                ...
            </button>
            {isOpen && (
                <div className={`dropdown-btn-menu ${isOpen ? 'active' : ''}`}>
                    <div className='drop-down-labels'>
                        <label className='print-options-container'>
                            Select All
                            <input type="checkbox" checked="checked" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            Main Details
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            F & B
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            Theme & Decor
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            Attendee List
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            Collaborators
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className='print-options-container'>
                            Media
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            )}
            <div className='event-box-details' onClick={() => handleEventClick(true)}>
                <h3>{eventName}</h3>
                <div>
                    <p>Location: {eventLocation}</p>
                    <p>Date: {eventDate}</p>
                </div>
                {showEventDetails && (
                    <EventOverview 
                        event={{
                            eventId,
                            eventName,
                            eventDate,
                            eventTime,
                            eventLocation,
                            guestsCount,
                            eventTheme,
                            eventImage
                        }}
                        closeEventDetails={() => setShowEventDetails(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default PrintBox;