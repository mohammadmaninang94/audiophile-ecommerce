import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icon-instagram.svg';

import './footer.styles.scss';

const Footer = () => {
    return (
        <footer>
            <Link to='/' className='footer__logo'>
                <Logo />
            </Link>
            <nav className='footer__nav'>
                <Link to='/'>home</Link>
                <Link to='/headphones'>headphones</Link>
                <Link to='/speakers'>speakers</Link>
                <Link to='/earphones'>earphones</Link>
            </nav>
            <p className='footer__about'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className='footer__icons'>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
            <p className='footer__copyright'>Copyright 2021. All Rights Reserved</p>
        </footer>
    )
};

export default Footer;