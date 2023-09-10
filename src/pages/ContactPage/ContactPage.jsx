import './ContactPage.scss'
import { useState } from 'react';
import EmailIcon from '../../assets/Icons/Message.svg';
import NameIcon from '../../assets/Icons/User.svg';

const ContactPage = () => {

    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return(
        <div className='dashboard-content'>
            <div>
                <h1 className='title'>Contact</h1>
                <h2 className='sub-title'>Get In Touch!</h2>
                <h3>Hello, who are you?</h3>
                <div className='contact-form-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='contact-box'>
                            <div className='personal-details'>
                                <div className='contact-box__container'>
                                    <label>
                                        <img src={NameIcon} alt='Name Icon' className='name-icon' />
                                        <input 
                                            type="text"
                                            placeholder='Name'
                                            id='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </label>
                                </div>
                                <div className='contact-box__container'>
                                    <img src={EmailIcon} alt='Email Icon' className='email-icon' />
                                    <label>
                                        <input 
                                            type="email"
                                            placeholder='Email'
                                            id='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </label>
                                </div>
                            </div>    
                            <div className='contact-box__message'>
                                <label>
                                    <textarea
                                        type="text"
                                        placeholder='Message'
                                        id='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                    ></textarea>
                                </label>
                            </div>
                        </div>                            
                        <button className='contact-submit-btn' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactPage;