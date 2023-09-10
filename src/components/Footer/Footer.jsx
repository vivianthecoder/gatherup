import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer-menu'>
                <ul className='f-menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='/about'>About</a></li>
                    <li>&copy; GatherUp 2023</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;