import { Fragment, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';
import './product-detail.styles.scss';

import CustomCta, { ctaTag, ctaType } from '../../components/custom-cta/custom-cta.component';
import MainProduct from '../../components/main-product/main-product.component';
import Features from '../../components/features/features.component';
import SecondaryImages from '../../components/secondary-images/secondary-images.component';
import RelatedProducts from '../../components/related-products/related-products.component';

const ProductDetail = () => {
    const { products, productLookup, productLookupRelated } = useContext(ProductsContext);
    const { extractItem } = useContext(CartContext);
    const { productid } = useParams();
    const product = productLookup(products, productid);
    const navigate = useNavigate();

    return (
        <Fragment>
            <CustomCta ctaType={ctaType.LINK} tag={ctaTag.LINK} handleClick={() => navigate(-1)} id="go-back">Go Back</CustomCta>
            <MainProduct
                image={product.image}
                name={product.name}
                new={product.new}
                description={product.description}
                price={product.price}
                slug={product.slug}
                item={extractItem(product)}
            />
            <Features
                features={product.features}
                quantity={product.quantity}
                includes={product.includes}
            />
            <SecondaryImages
                first={product.gallery.first}
                second={product.gallery.second}
                third={product.gallery.third}
                alt={product.name}
            />
            <RelatedProducts
                related={product.others}
                products={products}
                lookup={productLookupRelated}
            />
        </Fragment>
    );
};

export default ProductDetail;