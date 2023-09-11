import './Collaborators.scss'
import NewCollaboratorForm from './NewCollaboratorForm.jsx';
import GroupIcon from '../../../../assets/Icons/Group.svg';
import AddEventIcon from '../../../../assets/Icons/Add_square.svg';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const Collaborators = () => {
    const [collaboratorList, setCollaboratorList] = useState([]);
    const [isInviteFormOpen, setInviteFormOpen] = useState(false);
    const { id } = useParams();

    // To get event data from all events from the server
    function eventListRequest() {
        axios
            .get(`http://localhost:3031/dashboard`)
            .then(response => {
                setCollaboratorList(response.data)
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
    const addCollaborators = (newCollaborator) => {
        setCollaboratorList([...collaboratorList, newCollaborator])
    };
    
    // To fetch list of all events from the server
    useEffect(() => {
        eventListRequest();
    }, []);

    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={GroupIcon} alt='Edit Collaborator List Icon' className='navIcon'/> 
                    <h2 className='edit-menu-title'>Edit Collaborators</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Save</button>
                </div>
            </div>
            
            <div className='add-attendee-box'>
                <button className='first-add-btn' onClick={() => setInviteFormOpen(true)}>
                    <img src={AddEventIcon} alt='Add Event' className='add-btn' />
                    <h3>Add Collaborator</h3>
                </button>
                {isInviteFormOpen && 
                    <NewCollaboratorForm 
                        setInviteFormOpen={setInviteFormOpen}
                        addCollaborators={addCollaborators}
                        // handleUpdateAttendeeList={handleUpdateAttendeeList}
                        eventId={id}
                    />
                }
            </div>

            <h3>List</h3>
            <ul className='attendee-list'>
                {collaboratorList.map((collaborator, index) => (
                    <li key={index}>
                    {collaborator.collaboratorName && <span>Name: {collaborator.collaboratorName}</span>}
                    {collaborator.collaboratorName && <span>Email: {collaborator.collaboratorEmail}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Collaborators;