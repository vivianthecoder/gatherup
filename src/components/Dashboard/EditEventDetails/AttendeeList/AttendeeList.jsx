import './AttendeeList.scss'
import GroupIcon from '../../../../assets/Icons/Group.svg';
import { useState } from 'react';

const AttendeeList = ( ) => {
    const [isInviteFormVisible, setInviteFormVisible] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    // Array to store emails
    const [rsvpList, setRsvpList] = useState([]);

    const handleInviteClick = () => {
        setInviteFormVisible(true);
    };

    const handleEmailChange = (e) => {
        setInviteEmail(e.target.value);
    };

    const handleSendInvitation = () => {
        setRsvpList([...rsvpList, inviteEmail]);
        console.log('Sending invitation to:', inviteEmail);
        setInviteEmail('');
        setInviteFormVisible(false);
    }
    
    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <img src={GroupIcon} alt='Edit Event Icon' className='navIcon'/> 
                <h2>Attendee List</h2>
            </div>
            
            {isInviteFormVisible ? (
                <div>
                    <input
                        type='email'
                        placeholder='Enter email address here'
                        value={inviteEmail}
                        onChange={handleEmailChange}
                    />
                    <button onClick={handleSendInvitation}>Send Invitation</button>
                </div>
            ) : (
                <button onClick={handleInviteClick}>Invite</button>
            )}

            <h3>RSVP List</h3>
            <ul>
                {rsvpList.map((email, index) => (
                    <li key={index}>
                    {email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendeeList;