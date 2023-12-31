import './AttendeeList.scss'
import NewAttendeeForm from './NewAttendeeForm';
import GroupIcon from '../../../../assets/Icons/Group.svg';
import AddEventIcon from '../../../../assets/Icons/Add_square.svg';
// import axios from 'axios';
import { useState } from 'react';
// import { useParams } from 'react-router';
// import { useEffect } from 'react';

const AttendeeList = () => {
    // const [updatedAttendeeDetails, setUpdatedAttendeeDetails] = useState(formData);
    const [isInviteFormOpen, setInviteFormOpen] = useState(false);
    const [attendeeList, setAttendeeList] = useState([]);

    const addAttendeeToList = (newAttendee) => {
        setAttendeeList((prevList) => [...prevList, newAttendee])
    };

    // // To handle form field changes
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUpdatedAttendeeDetails((prevDetails) => ({
    //         ...prevDetails,
    //         [name]: value,
    //     }))
    // };

    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={GroupIcon} alt='Edit Attendee List Icon' className='navIcon'/> 
                    <h2 className='edit-menu-title'>Edit Attendees</h2>
                </div>
                <div className='btn-container'>
                {/* Button to be changed to edit mode om next sprint */}
                <button className="save-btn">Edit</button>
                </div>
            </div>
            
            <div className='add-attendee-box'>
                <button className='first-add-btn' onClick={() => setInviteFormOpen(true)}>
                    <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                    <h3>Add</h3>
                </button>
                {isInviteFormOpen && 
                    <NewAttendeeForm 
                        setInviteFormOpen={setInviteFormOpen}
                        // addAttendees={addAttendees}
                        // handleUpdateAttendeeList={handleUpdateAttendeeList}
                        // eventId={id}
                        addAttendeeToList={addAttendeeToList}
                    />
                }
            </div>

            <ul className='attendee-list'>
                {attendeeList.slice().reverse().map((attendee, index) => (
                    <li key={index}>
                        <div className='attendee-name'>
                            {attendee.attendeeName && <span>{attendee.attendeeName}</span>}
                        </div>
                        <div className='attendee-email'>
                            {attendee.attendeeName && <span>{attendee.attendeeEmail}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendeeList;