
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import CategorySection from '../components/category-section/category-section.component';
import AboutSection from '../components/about-section/about-section.component';

const ProductLayout = () => {
    return (
        <Fragment>
            <Outlet />
            <CategorySection />
            <AboutSection />
        </Fragment>
    )
};

export default ProductLayout;