import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Features from '../../components/features/features.component';
import SecondaryImages from '../../components/secondary-images/secondary-images.component';
import RelatedProducts from '../../components/related-products/related-products.component';
import './product-detail.styles.scss';

const ProductDetail = () => {
    let { productid } = useParams();

    return (
        <Fragment>
            <h1>{productid}</h1>
            <Features />
            <SecondaryImages />
            <RelatedProducts />
        </Fragment>
    );
};

export default ProductDetail;