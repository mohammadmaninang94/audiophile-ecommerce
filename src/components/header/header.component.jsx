import { Link } from 'react-router-dom';
import { Fragment, useEffect, useRef, useState } from 'react';

import Hero from '../../components/hero/hero.component';
import CategorySection from '../category-section/category-section.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

import './header.styles.scss';


const Header = () => {
    const [menuHidden, setMenuHidden] = useState(true);

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
            <header>
                <div className="header__primary">
                    <button type="button" className='header__mobile-btn' onClick={() => setMenuHidden(!menuHidden)}><span>Menu</span></button>
                    <Link className='header__logo' to='/'>
                        <Logo />
                    </Link>
                    <nav className='header__navigation'>
                        <ul>
                            <Link to='/'>home</Link>
                            <Link to='/headphones'>headphones</Link>
                            <Link to='/speakers'>speakers</Link>
                            <Link to='/earphones'>earphones</Link>
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