import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';
import DBIcon from '../../assets/Icons/Home.svg';
import EditIcon from '../../assets/Icons/Edit.svg';
import CollabIcon from '../../assets/Icons/User_add.svg';
import NotifIcon from '../../assets/Icons/Message.svg';
import TDIcon from '../../assets/Icons/Music_fill.svg';
import GMIcon from '../../assets/Icons/Group.svg';
import IAIcon from '../../assets/Icons/Rofl.svg';
import PhotoIcon from '../../assets/Icons/Img_box.svg';
import PrintIcon from '../../assets/Icons/Print.svg';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">
                            <img src={DBIcon} alt='Dashboard Icon' className='navIcon'/> 
                            <div className='navText'>Dashboard</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/collaborated-events" activeClassName="active">
                            <img src={CollabIcon} alt='Collaborators Icon' className='navIcon'/> 
                            <div className='navText'>Co-Hosted Events</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/event-poster" activeClassName="active">
                            <img src={TDIcon} alt='Create Event Poster Icon' className='navIcon'/> 
                            <div className='navText'>Create Event Poster</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notifications" activeClassName="active">
                            <img src={NotifIcon} alt='Notifications Icon' className='navIcon'/> 
                            <div className='navText'>Notifications</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/guestmanagement" activeClassName="active">
                            <img src={GMIcon} alt='Guest Management' className='navIcon'/> 
                            <div className='navText'>Guest Management</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/interactiveactivities" activeClassName="active">
                            <img src={IAIcon} alt='Interactive Activities' className='navIcon'/> 
                            <div className='navText'>Interactive Activities</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos" activeClassName="active">
                            <img src={PhotoIcon} alt='Photos' className='navIcon'/> 
                            <div className='navText'>Photos</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/print" activeClassName="active">
                            <img src={PrintIcon} alt='Photos' className='navIcon'/> 
                            <div className='navText'>Print</div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;