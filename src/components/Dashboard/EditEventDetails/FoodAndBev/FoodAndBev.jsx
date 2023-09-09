import './FoodAndBev.scss';
import EditIcon from '../../../../assets/Icons/Edit.svg';

const FoodAndBev = () => {
    return(
        <div>
            <div className='sub-header'>
                <div className='sub-header-title'>
                    <img src={EditIcon} alt='Edit Event Icon' className='navIcon'/> 
                    <h2>Edit Catering</h2>
                </div>
                <div className='btn-container'>
                <button className="save-btn">Save</button>
                </div>
            </div>
            <div className='food-and-bev-info-box'>
                <div>
                    <h3>Food</h3>
                    <label className='food-box'>
                    <p>Appetizers:</p>
                    <input
                        className='input-box'
                        type='text'
                        name='appetizers'
                        value=''
                    />                
                    </label>  
                    <label className='food-box'>
                        <p>Sides:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='sides'
                            value=''
                        />                
                    </label>   
                    <label className='food-box'>
                        <p>Salads:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='salads'
                            value=''
                        />                
                    </label>       
                    <label className='food-box'>
                        <p>Main Course:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='mainCourse'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Food Stations:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='foodStations'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Desserts:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='desserts'
                            value=''
                        />                
                    </label>   
                    <label className='food-box'>
                        <p>Dietary Notes:</p>
                        <input
                            className='input-box'
                            type='text'
                            name='dietaryNotes'
                            value=''
                        />                
                    </label>
                </div>
                
                <div>
                    <h3>Beverages</h3>
                    <label className='food-box'>
                        <p>Soft Drinks:</p>
                        <input
                            type='text'
                            name='softDrinks'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Coffee & Tea:</p>
                        <input
                            type='text'
                            name='coffeeAndTea'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Juice:</p>
                        <input
                            type='text'
                            name='juice'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Water & Other:</p>
                        <input
                            type='text'
                            name='waterAndOther'
                            value=''
                        />                
                    </label>
                    <label className='food-box'>
                        <p>Alcohol:</p>
                        <input
                            type='text'
                            name='alcohol'
                            value=''
                        />                
                    </label>
                </div>
                
            </div>
        </div>
    )
}

export default FoodAndBev;