import './Collaborators.scss'
import AddUserIcon from '../../../../assets/Icons/User_add.svg';
import { useState } from 'react';

const Collaborators = () => {

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
                <img src={AddUserIcon} alt='Edit Event Icon' className='navIcon'/> 
                <h2>Add Co-host</h2>
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

export default Collaborators;