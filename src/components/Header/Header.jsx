import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';
import DBIcon from '../../assets/Icons/Home.svg';
import PastEventsIcon from '../../assets/Icons/File_dock.svg';
import NotifIcon from '../../assets/Icons/Bell.svg';
// import IAIcon from '../../assets/Icons/Rofl.svg';
import SettingsIcon from '../../assets/Icons/Setting_line.svg';
import PrintIcon from '../../assets/Icons/Print.svg';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <nav>
                <ul className='nav-container'>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">
                            <img src={DBIcon} alt='Dashboard Icon' className='navIcon'/> 
                            <div className='navText'>Dashboard</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/past-events" activeClassName="active">
                            <img src={PastEventsIcon} alt='Past Events Icon' className='navIcon'/> 
                            <div className='navText'>Past Events</div>
                        </NavLink>
                    </li>
                    {/* Not functional yet */}
                    {/* <li>
                        <NavLink to="/interactiveactivities" activeClassName="active">
                            <img src={IAIcon} alt='Interactive Activities' className='navIcon'/> 
                            <div className='navText'>Interactive Activities</div>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/notifications" activeClassName="active">
                            <img src={NotifIcon} alt='Notifications Icon' className='navIcon'/> 
                            <div className='navText'>Notifications</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" activeClassName="active">
                            <img src={SettingsIcon} alt='Settings' className='navIcon'/> 
                            <div className='navText'>Settings</div>
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