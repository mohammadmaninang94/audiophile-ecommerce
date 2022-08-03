import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icon-instagram.svg';

import './footer.styles.scss';

const Footer = () => {
    return (
        <footer>
            <div>
                <Link to='/'>
                    <Logo />
                </Link>
                <nav>
                    <Link to='/'>home</Link>
                    <Link to='/headphones'>headphones</Link>
                    <Link to='/speakers'>speakers</Link>
                    <Link to='/earphones'>earphones</Link>
                </nav>
            </div>
            <div>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <div>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    )
};

export default Footer;