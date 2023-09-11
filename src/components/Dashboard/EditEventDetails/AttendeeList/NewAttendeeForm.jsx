import { useState } from "react";

const NewAttendeeForm = ({ setInviteFormOpen, addAttendeeToList }) => {
    // To create a new attendee list object
    const [list, setList] = useState({
        attendeeName: '',
        attendeeEmail:''
    });

    // To handle name change in form field
    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setList({
            ...list,
            [name]: value
        })
    };

    // To handle email change in form field
    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setList({
            ...list,
            [name]: value
        })
    };

    // To handle the submit button clicked in the new attendee form field
    const handleSubmit = () => {
        // To check if all form fields are filled
        if (
            list.attendeeName &&
            list.attendeeEmail
        ) {
            addAttendeeToList(list);

            setList({
                attendeeName: '',
                attendeeEmail: '',
            });

            setInviteFormOpen(false);
            // To post the data to our server data
            // axios
            //     .post(`http://localhost:3031/dashboard`, list, {
            //         headers: {
            //             'Content-Type' : 'application/json',
            //         },
            //     })
            //     .then(response => {
            //         console.log('Success', response.data);
            //         addAttendees(response.data);

            //         setList({
            //             attendeeList: ''
            //         });
            //         // To close the form
            //         setInviteFormOpen(false);
            //     })
            //     .catch(error => {
            //         console.error('Error',  error);
            //     })
        }
    };

    const handleSaveAndContinue = () => {
        // To check if all form fields are filled
        if (
            list.attendeeName &&
            list.attendeeEmail
        ) {
            addAttendeeToList(list);

            setList({
                attendeeName: '',
                attendeeEmail: '',
            });

            setInviteFormOpen(true);
        }
    };
    
    return(
        <div className='overlay'>
        <div className='event-form'>
            <button className='exit-btn' onClick={() => setInviteFormOpen(false)}>X</button>
            <h2>Enter Form Fields</h2>
            <input
                type='text'
                placeholder='Name'
                name='attendeeName'
                onChange={handleNameChange}
            />
            <input  
                type='email'
                placeholder='Email'
                name='attendeeEmail'
                onChange={handleEmailChange}
            />
            <button className='submit-btn' onClick={handleSaveAndContinue}>Save and Continue</button>
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    )
};

export default NewAttendeeForm;