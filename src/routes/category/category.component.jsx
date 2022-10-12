import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import './category.styles.scss';
import CategoryProduct from '../../components/category-product/category-product.component';

const Category = ({ title }) => {
    const { products, categoryLookup } = useContext(ProductsContext);
    const categoryArr = categoryLookup(products, title);

    return (
        <Fragment>
            <CategoryProduct categoryArr={categoryArr}></CategoryProduct>
        </Fragment>
    )
};

export default Category;