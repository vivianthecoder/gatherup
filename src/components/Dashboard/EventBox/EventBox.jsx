import './EventBox.scss';

const EventBox = ({ eventName, eventDate, eventListRequest }) => {
    return (
        
        <div className='event-box'>
            <h3>{eventName}</h3>
            <p>Date: {eventDate}</p>
        </div>
    )
}

export default EventBox;