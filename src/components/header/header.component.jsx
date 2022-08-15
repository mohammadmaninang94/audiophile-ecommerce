import { NavLink, Link, useLocation } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

import Hero from '../../components/hero/hero.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

import routes from '../../routes/routes';

import './header.styles.scss';


const Header = () => {
    const { toggleMenu, toggleCart } = useContext(AppContext);
    const location = useLocation();
    let headerClassName = '';

    switch (location.pathname) {
        case routes.HOME:
            headerClassName = 'header--home';
            break;
        case routes.HEADPHONES:
        case routes.SPEAKERS:
        case routes.EARPHONES:
            headerClassName = 'header--category';
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <header className={`header ${headerClassName}`}>
                <div className="header__primary">
                    <button type="button" className='header__mobile-btn' onClick={toggleMenu}><span>Menu</span></button>
                    <Link className='header__logo' to='/'>
                        <Logo />
                    </Link>
                    <nav className='header__navigation'>
                        <ul>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }>home</NavLink>
                            <NavLink to='/headphones' className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }>headphones</NavLink>
                            <NavLink to='/speakers' className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }>speakers</NavLink>
                            <NavLink to='/earphones' className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }>earphones</NavLink>
                        </ul>
                    </nav>
                    <CartIcon onClick={toggleCart} />
                </div>
                <Hero />
            </header>
        </Fragment>
    )
};

export default Header;