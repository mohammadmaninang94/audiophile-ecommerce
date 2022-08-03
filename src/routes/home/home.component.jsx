import { Fragment } from 'react';

import CategorySection from '../../components/category-section/category-section.component';
import LatestSection from '../../components/latest-section/latest-section.component';

const Home = () => {
    return (
        <Fragment>
            <CategorySection />
            <LatestSection />
        </Fragment>
    );
};

export default Home;