import './EventBox.scss';

const EventBox = ({ event }) => {
    return (
        <div className='event-box'>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
        </div>
    )
}

export default EventBox;