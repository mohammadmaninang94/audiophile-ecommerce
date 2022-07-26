import { Fragment, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { AppContext } from '../contexts/app.context';

import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import CartBox from '../components/cart-box/cart-box.component';
import CategorySection from '../components/category-section/category-section.component';
import CheckoutModal from '../components/checkout-modal/checkout-modal.component';

import routes from '../routes/routes';


const MainLayout = () => {
    const { menuHidden, cartHidden, checkoutModalHidden } = useContext(AppContext);
    const location = useLocation();
    let mainClassName = '';

    switch (location.pathname) {
        case routes.CHECKOUT:
            mainClassName = 'main--checkout';
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <Header />
            <main className={`main ${mainClassName}`}>
                <Outlet />
            </main>
            <Footer />
            <div className={`mobile-menu ${menuHidden ? '' : 'visible'}`}><CategorySection /></div>
            {location.pathname !== routes.CHECKOUT ?
                <div className={`cart ${cartHidden ? '' : 'visible'}`}><CartBox /></div>
                : ( checkoutModalHidden ? null : <CheckoutModal />)
            }
        </Fragment>
    );
};

export default MainLayout;