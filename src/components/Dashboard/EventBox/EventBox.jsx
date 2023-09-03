import './EventBox.scss';

const EventBox = ({ name, date }) => {
    return (
        <div className='event-box'>
            <h3>{name}</h3>
            <p>Date: {date}</p>
        </div>
    )
}

export default EventBox;