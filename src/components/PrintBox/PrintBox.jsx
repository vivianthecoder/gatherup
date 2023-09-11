import './PrintBox.scss'
import { useState } from 'react';
import EventOverview from '../Dashboard/EventOverview/EventOverview';

const PrintBox = ({ eventId, eventName, eventDate, eventTime, eventLocation, guestsCount, eventTheme, eventImage, eventAgenda }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEventDetails, setShowEventDetails] = useState(false);

    // To drop down the top right nav
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };

    // To handle print event when clicking on the box
    const handlePrintEventClick = () => {
        const printContent = `
            <html>
                <head>
                    <title>Event Details</title>
                </head>
                <body>
                    <h2>${eventName}</h2>
                    <p>Event Date: ${eventDate}</p>
                    <p>Event Time: ${eventTime}</p>
                    <p>Event Location: ${eventLocation}</p>
                    <p>Guests Count: ${guestsCount}</p>
                    <p>Event Theme: ${eventTheme}</p>
                    <p>Event Agenda: ${eventAgenda}</p>
                    <img src="${eventImage}" alt="${eventName}" />
                </body>
            </html>
        `;
        
        // To open pop up
        const printWindow = window.open('', '', `width=800,height=800`);

        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();
        
        printWindow.onload = () => {
            printWindow.print();
        }
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
            <div className='event-box-details' onClick={() => handlePrintEventClick(true)}>
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