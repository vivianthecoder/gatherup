import './MainDetails.scss';
import EditIcon from '../../../../assets/Icons/Edit.svg';
import { useState } from 'react';

const MainDetails = ({ onSave, formData, setFormData }) => {
    const [updatedMainDetails, setUpdatedMainDetails] = useState(formData);

    // To handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMainDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    };

    // To handle the form submission
    const handleSave = () => {
        onSave(updatedMainDetails);
    };

    return (
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={EditIcon} alt='Edit Event Icon' className='navIcon'/> 
                    <h2 className='edit-menu-title'>Edit Main Details</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
            
            <div className='main-info-container'>
                <label className='main-info-box'>
                    Name: 
                    <input
                        type='text'
                        name='eventName'
                        value={updatedMainDetails.eventName || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Date:
                    <input
                        type='text'
                        name='eventDate'
                        value={updatedMainDetails.eventDate || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Time:
                    <input
                        type='text'
                        name='eventTime'
                        value={updatedMainDetails.eventTime || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='main-info-box'>
                    Location:
                    <input
                        type='text'
                        name='eventLocation'
                        value={updatedMainDetails.eventLocation || ''}
                        onChange={handleChange}
                    />
                </label>

                <h3 className='agenda-title'>Event Agenda</h3>
                <label className='agenda-box'>
                    <textarea
                        type='text'
                        name='eventAgenda'
                        value={updatedMainDetails.eventAgenda || ''}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default MainDetails;
