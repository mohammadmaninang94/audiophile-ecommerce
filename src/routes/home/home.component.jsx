import { Fragment } from 'react';

import CategorySection from '../../components/category-section/category-section.component';
import LatestSection from '../../components/latest-section/latest-section.component';
import AboutSection from '../../components/about-section/about-section.component';

import './home.styles.scss';

const Home = () => {
    return (
        <Fragment>
            <CategorySection />
            <LatestSection />
            <AboutSection />
        </Fragment>
    );
};

export default Home;