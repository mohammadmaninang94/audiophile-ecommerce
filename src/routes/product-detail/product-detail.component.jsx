import { Fragment } from 'react';
// import { useParams } from 'react-router-dom';
import './product-detail.styles.scss';

import CustomCta, { ctaTag, ctaType } from '../../components/custom-cta/custom-cta.component';
import MainProduct from '../../components/main-product/main-product.component';
import Features from '../../components/features/features.component';
import SecondaryImages from '../../components/secondary-images/secondary-images.component';
import RelatedProducts from '../../components/related-products/related-products.component';

const ProductDetail = () => {
    // let { productid } = useParams();

    return (
        <Fragment className="product-detail">
            {/*<h1>{productid}</h1>*/}
            <CustomCta type={ctaType.LINK} tag={ctaTag.LINK} id="go-back">Go Back</CustomCta>
            <MainProduct />
            <Features />
            <SecondaryImages />
            <RelatedProducts />
        </Fragment>
    );
};

export default ProductDetail;