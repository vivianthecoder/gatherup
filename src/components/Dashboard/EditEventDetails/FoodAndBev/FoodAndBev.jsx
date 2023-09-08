import './FoodAndBev.scss';

const FoodAndBev = () => {
    return(
        <div>
            <h3>Food</h3>
            <div className="food-box">
                <p>Appetizers:</p>
                <textarea id="eventAppetizers" rows="1" cols="50"></textarea>
            </div>
            
            <div className="food-box">
                <p>Sides:</p>
                <textarea id="eventSides" rows="1" cols="50"></textarea>
            </div>
            <div className="food-box">
                <p>Salads:</p>
                <textarea id="eventSalads" rows="1" cols="50"></textarea>
            </div>
            <div className="food-box">
                <p>Main Courses:</p>
                <textarea id="eventMainCourses" rows="1" cols="50"></textarea>
            </div>            
            <div className="food-box">
                <p>Food Stations:</p>
                <textarea id="eventFoodStations" rows="1" cols="50"></textarea>
            </div>       
            <div className="food-box">
                <p>Desserts:</p>
                <textarea id="eventDesserts" rows="1" cols="50"></textarea>
            </div>     
            <div className="food-box">
                <p>Dietary Notes:</p>
                <textarea id="eventDietaryNotes" rows="1" cols="50"></textarea>
            </div>
            <h3>Beverages</h3>
            <p>Soft Drinks</p>
            <p>Coffee & Tea</p>
            <p>Juice</p>
            <p>Water</p>

            <p>Alcohol</p>

        </div>
    )
}

export default FoodAndBev;