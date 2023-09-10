import './AboutPage.scss';

const AboutPage = () => {
    return(
        <div className='dashboard-content'>
            <div>
                <h1 className='title'>About</h1>
                <h2 className='sub-title'>Who Are We?</h2>
                <div>
                <img 
                    className="wip-img"
                    alt="Work In Progress Chicken"
                    src='https://t3.ftcdn.net/jpg/05/53/19/18/240_F_553191893_9X876OZv5aAPQ3ls5UeNbKbJ2cUMa5Pm.jpg' 
                />
                <img 
                    className="wip-img"
                    alt="Work In Progress Chicken"
                    src="https://www.petersime.com/media/ln1akajc/petersime-chick-under-construction.png?width=1920&height=1920&rnd=133305998277400000"
                />
                </div>
            </div>
        </div>
    )
};

export default AboutPage;