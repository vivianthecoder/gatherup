import './Media.scss'
import AddImageIcon from '../../../../assets/Icons/Img_box.svg';
import ImageCarousel from './ImageCarousel';
import UploadIcon from '../../../../assets/Icons/Import.svg'

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
                <button className="share-btn">Share</button>
                </div>
            </div>

            <h3 className='sub-header-sub-title'>Photos</h3>
            <ImageCarousel images={images} />

            <div>
                <form>
                    <label className='file-upload-btn'>
                        <img src={UploadIcon} alt='Media Icon' className='navIcon'/> 
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </label>
                <h3>Videos</h3>
                    <label className='file-upload-btn'>
                        <img src={UploadIcon} alt='Media Icon' className='navIcon'/> 
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Media;