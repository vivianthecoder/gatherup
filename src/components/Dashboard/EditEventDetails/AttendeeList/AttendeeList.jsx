import './AttendeeList.scss'
import GroupIcon from '../../../../assets/Icons/Group.svg';
import { useState } from 'react';

const AttendeeList = ( ) => {

    // For EMAIL form
    const [isInviteFormVisible, setInviteFormVisible] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');

    const handleInviteClick = () => {
        setInviteFormVisible(true);
    };

    const handleEmailChange = (e) => {
        setInviteEmail(e.target.value);
    };

    const handleSendInvitation = () => {
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
        </div>
    );
}

export default AttendeeList;