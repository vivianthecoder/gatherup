import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <p>Cheese</p>
        </header>
    )
}

export default Header;