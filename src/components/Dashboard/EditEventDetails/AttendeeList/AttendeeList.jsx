import './AttendeeList.scss'
import NewAttendeeForm from './NewAttendeeForm';
import GroupIcon from '../../../../assets/Icons/Group.svg';
import AddEventIcon from '../../../../assets/Icons/Add_square.svg';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const AttendeeList = () => {
    const [attendeeList, setAttendeeList] = useState([]);
    const [isInviteFormOpen, setInviteFormOpen] = useState(false);
    const { id } = useParams();

    // To get event data from all events from the server
    function eventListRequest() {
        axios
            .get(`http://localhost:3031/dashboard`)
            .then(response => {
                setAttendeeList(response.data)
            }).catch((error) => console.log('Failed fetching data', error)
        );
    }

    // To handle updating attendee list array
    // const handleUpdateAttendeeList = (eventId, newAttendee) => {
    //     setAttendeeList(attendees => {
    //         return attendees.map(event => {
    //             if (event.id === eventId) {
    //                 return {
    //                     ...event,
    //                     attendees: [...(event.attendees || []), newAttendee]
    //                 }
    //             }
    //             return event;
    //         })
    //     })
    // };
  
    // To push the newEvent object onto the setEvents array with updated fields
    const addAttendees = (newAttendee) => {
        setAttendeeList([...attendeeList, newAttendee])
    };
    
    // To fetch list of all events from the server
    useEffect(() => {
        eventListRequest();
    }, []);

    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={GroupIcon} alt='Edit Attendee List Icon' className='navIcon'/> 
                    <h2>Edit Attendees</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Save</button>
                </div>
            </div>
            
            <div className='add-attendee-box'>
                <button className='first-add-btn' onClick={() => setInviteFormOpen(true)}>
                    <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                    <h3>Add Attendee</h3>
                </button>
                {isInviteFormOpen && 
                    <NewAttendeeForm 
                        setInviteFormOpen={setInviteFormOpen}
                        addAttendees={addAttendees}
                        // handleUpdateAttendeeList={handleUpdateAttendeeList}
                        eventId={id}
                    />
                }
            </div>

            <h3>RSVP List</h3>
            <ul className='attendee-list'>
                {attendeeList.map((attendee, index) => (
                    <li key={index}>
                    {attendee.attendeeName && <span>Name: {attendee.attendeeName}</span>}
                    {attendee.attendeeName && <span>Email: {attendee.attendeeEmail}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendeeList;