import './Media.scss'
import AddImageIcon from '../../../../assets/Icons/Img_box.svg';
import ImageCarousel from './ImageCarousel';

const Media = () => {
    
    // To replace later on and link to json file
    const images = [
        "https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2466341/pexels-photo-2466341.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/348517/pexels-photo-348517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    
    return(
        <div className='edit-event-details'>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={AddImageIcon} alt='Media Icon' className='navIcon'/> 
                    <h2>Media</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Share</button>
                </div>
            </div>

            <h3>Photos</h3>
            <ImageCarousel images={images} />

            <form>
                <input type="file" id="img" name="img" accept="image/*"/>
            </form>
            <h3>Videos</h3>
            <form>
                <input type="file" id="img" name="img" accept="image/*"/>
            </form>
        </div>
    );
}

export default Media;