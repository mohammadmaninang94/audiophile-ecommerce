import { Link } from 'react-router-dom';

import Hero from '../../components/hero/hero.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

import './header.styles.scss';

const Header = () => {
    return (
        <header>
            <div className='header__primary'>
                <button type="button" className='header__mobile-btn'><span>Menu</span></button>
                <nav className='header__navigation'>
                    <ul>
                        <Link to='/'>home</Link>
                        <Link to='/headphones'>headphones</Link>
                        <Link to='/speakers'>speakers</Link>
                        <Link to='/earphones'>earphones</Link>
                    </ul>
                </nav>
                <Link to='/'>
                    <Logo />
                </Link>
                <CartIcon />
            </div>
            <Hero />
        </header>
    )
};

export default Header;