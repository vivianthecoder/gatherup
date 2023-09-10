import './ContactPage.scss'

const ContactPage = () => {
    return(
        <div className='dashboard-content'>
            <div>
                <h1 className='title'>Contact</h1>
                <h2 className='sub-title'>Get In Touch!</h2>
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

export default ContactPage;