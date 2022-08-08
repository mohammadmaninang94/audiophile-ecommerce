import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

const Main = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Main;