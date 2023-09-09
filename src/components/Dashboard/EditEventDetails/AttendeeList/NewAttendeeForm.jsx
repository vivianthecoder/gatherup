const NewAttendeeForm = ({ addAttendee, setShowForm}) => {
    // To create a new event object
    const [event, setEvent] = useState({
        attendeeList: []
    });


    // To handle changes in form fields and update the event object
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value   
        });
    };

    return(
        <div className='overlay'>
        <div className='event-form'>
            <button className='exit-btn' onClick={() => setShowForm(false)}>X</button>
            <h2>Enter Form Fields</h2>
            <input
                type='text'
                placeholder='Event Name'
                name='eventName'
                value={event.eventName}
                onChange={handleChange}
            />
            <input  
                type='date'
                name='eventDate'
                value={event.eventDate}
                onChange={handleChange}
            />
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    )
};

export default NewAttendeeForm;