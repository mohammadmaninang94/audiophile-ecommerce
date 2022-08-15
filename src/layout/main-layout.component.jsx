import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { AppContext } from '../contexts/app.context';

import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import CartBox from '../components/cart-box/cart-box.component';
import CategorySection from '../components/category-section/category-section.component';


const MainLayout = () => {
    const { menuHidden, cartHidden } = useContext(AppContext);

    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <div className={`mobile-menu ${menuHidden ? '' : 'visible'}`}><CategorySection /></div>
            <div className={`cart ${cartHidden ? '' : 'visible'}`}><CartBox /></div>
        </Fragment>
    );
};

export default MainLayout;