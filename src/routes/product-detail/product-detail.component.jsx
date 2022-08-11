import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import './product-detail.styles.scss';

const ProductDetail = () => {
    let { productid } = useParams();

    return (
        <Fragment>
            <h1>{productid}</h1>
        </Fragment>
    );
};

export default ProductDetail;