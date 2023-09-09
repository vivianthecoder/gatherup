import './Media.scss'
import AddImageIcon from '../../../../assets/Icons/Img_box.svg';

const Media = () => {
    
    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={AddImageIcon} alt='Media Icon' className='navIcon'/> 
                    <h2>Media</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Save</button>
                </div>
            </div>
            
            

            <h3>Photos</h3>
            <h3>Videos</h3>


        </div>
    );
}

export default Media;