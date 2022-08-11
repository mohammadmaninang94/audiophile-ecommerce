import { NavLink, Link, useLocation } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import Hero from '../../components/hero/hero.component';
import CategorySection from '../category-section/category-section.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

import routes from '../../routes/routes';

import './header.styles.scss';


const Header = () => {
    const [menuHidden, setMenuHidden] = useState(true);
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

    useEffect(() => {
        document.body.classList.toggle('menu-visible');
    }, [menuHidden]);

    // const [height, setHeight] = useState(100);
    // const [scrolltop, setScrolltop] = useState(0);
    // const headerEl = useRef(null);

    // useEffect(() => {
    //     const headerHeight = headerEl.current.clientHeight;

    //     setHeight(prevHeight => {
    //         if (headerHeight > prevHeight) {
    //             return headerHeight;
    //         }
    //         return prevHeight;
    //     });
    //     window.addEventListener("scroll", handleScroll);
    // }, []);

    // const handleScroll = () => {
    //     const scrollTop = window.pageYOffset;
    //     setScrolltop(scrollTop);
    // };

    return (
        <Fragment>
            <header className={`header ${headerClassName}`}>
                <div className="header__primary">
                    <button type="button" className='header__mobile-btn' onClick={() => setMenuHidden(!menuHidden)}><span>Menu</span></button>
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
                    <CartIcon />
                </div>
                <Hero />
            </header>
            <div className={`mobile-menu ${menuHidden ? '' : 'visible'}`}><CategorySection /></div>
        </Fragment>
    )
};

export default Header;