
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './category.styles.scss';

const Category = ({ title }) => {
    const location = useLocation();
    return (
        <Fragment>
            <h1>{title} Category</h1>
            <Link to={`${location.pathname}/item1`}>item1</Link>
            <Link to={`${location.pathname}/item2`}>item2</Link>
            <Link to={`${location.pathname}/item3`}>item3</Link>
        </Fragment>
    )
};

export default Category;