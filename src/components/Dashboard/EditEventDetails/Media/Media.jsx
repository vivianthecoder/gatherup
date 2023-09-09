import './Media.scss'
import AddImageIcon from '../../../../assets/Icons/Img_box.svg';
import ImageCarousel from './ImageCarousel';

const Media = () => {
    
    const images = [
        "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    
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