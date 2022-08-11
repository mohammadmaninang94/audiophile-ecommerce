import { Fragment } from 'react';

import CategorySection from '../../components/category-section/category-section.component';
// import LatestSection from '../../components/latest-section/latest-section.component';
import AboutSection from '../../components/about-section/about-section.component';

import './product-detail.styles.scss';

const ProductDetail = () => {
    return (
        <Fragment>
            <CategorySection />
            <AboutSection />
        </Fragment>
    );
};

export default ProductDetail;