import './Collaborators.scss'
import NewCollaboratorForm from './NewCollaboratorForm.jsx';
import GroupIcon from '../../../../assets/Icons/Group.svg';
import AddEventIcon from '../../../../assets/Icons/Add_square.svg';
// import axios from 'axios';
import { useState } from 'react';
// import { useParams } from 'react-router';
// import { useEffect } from 'react';

const Collaborators = () => {
    // const [updatedAttendeeDetails, setUpdatedAttendeeDetails] = useState(formData);
    const [isInviteFormOpen, setInviteFormOpen] = useState(false);
    const [collaboratorList, setCollaboratorList] = useState([]);

    const addCollaboratorToList = (newCollaborator) => {
        setCollaboratorList((prevList) => [...prevList, newCollaborator])
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
                    <img src={GroupIcon} alt='Edit Collaborator List Icon' className='navIcon'/> 
                    <h2 className='edit-menu-title'>Edit Collaborators</h2>
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
                    <NewCollaboratorForm 
                        setInviteFormOpen={setInviteFormOpen}
                        // addCollaborators={addCollaborators}
                        // handleUpdateAttendeeList={handleUpdateAttendeeList}
                        // eventId={id}
                        addCollaboratorToList={addCollaboratorToList}
                    />
                }
            </div>

            <ul className='collaborator-list'>
                {collaboratorList.slice().reverse().map((collaborator, index) => (
                    <li key={index}>
                        <div className='collaborator-name'>
                            {collaborator.collaboratorName && <span>{collaborator.collaboratorName}</span>}
                        </div>
                        <div className='collaborator-email'>
                            {collaborator.collaboratorName && <span>{collaborator.collaboratorEmail}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Collaborators;