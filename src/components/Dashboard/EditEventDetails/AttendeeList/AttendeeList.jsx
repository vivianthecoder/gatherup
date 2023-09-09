import './AttendeeList.scss'
import NewAttendeeForm from './NewAttendeeForm';
import GroupIcon from '../../../../assets/Icons/Group.svg';
import AddEventIcon from '../../../../assets/Icons/Add_square.svg';
import { useState } from 'react';

const AttendeeList = () => {
    const [isInviteFormVisible, setInviteFormVisible] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    // Array to store emails
    const [rsvpList, setRsvpList] = useState([]);

    const handleAddAttendeeClick = () => {
        setInviteFormVisible(true);
    };

    const handleEmailChange = (e) => {
        setInviteEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSendInvitation = () => {
        setRsvpList([...rsvpList, inviteEmail]);
        console.log('Sending invitation to:', inviteEmail);
        setInviteEmail('');
        setInviteFormVisible(false);
    }
    const handleAddAttendee = () => {
        setRsvpList([...rsvpList, `${name} (${inviteEmail})`])
        setName('');
        setInviteEmail('');
        setShowForm(false);
    };
    
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
                <button className='first-add-btn' onClick={() => setShowForm(true)}>
                    <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                    <h3>Add Attendee</h3>
                </button>
                {showForm && 
                    <NewAttendeeForm 
                        addAttendee={addAttendee} 
                        setShowForm={setShowForm} 
                    />
                }
            </div>

            <h3>RSVP List</h3>
            <ul>
                {rsvpList.map((attendee, index) => (
                    <li key={index}>
                    Name: {attendee.name}
                    Email: {attendee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendeeList;