import './ThemeAndDecor.scss';
import EditIcon from '../../../../assets/Icons/Edit.svg';
import Iframe from 'react-iframe';

const ThemeAndDecor = () => {
    return (
        <div>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={EditIcon} alt='Edit Event Icon' className='navIcon'/> 
                    <h2>Edit Theme & Decor</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Save</button>
                </div>
            </div>
            <p>Ideas: https://meetings.skift.com/100-event-theme-ideas/</p>

            <form className="content-box">
                <label className='themeAndDecor-info-box'>
                    Theme: 
                    <input
                        className='input-box'
                        type='text'
                        name='eventTheme'
                        value=''
                    />
                </label>
                <label className='themeAndDecor-info-box'>
                    Decor: 
                    <input
                        className='input-box'
                        type='text'
                        name='eventTheme'
                        value=''
                    />
                </label>
            </form>
            <h3>Explore Nearby For Shopping</h3>
            <Iframe 
                src="https://storage.googleapis.com/maps-solutions-rnoars92o2/neighborhood-discovery/wg57/neighborhood-discovery.html"
            />   
        </div>
    )
};

export default ThemeAndDecor;