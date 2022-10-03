import './main-product.styles.scss';

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

const MainProduct = (props) => {
    return (
        <section className='main-product'>
            <img
                src={props.image.mobile}

                // Need to play with srcSet to get it to work properly
                srcSet=
                {`
                    ${props.image.mobile} 327w,
                    ${props.image.tablet} 281w,
                    ${props.image.desktop} 540w
                `}

                sizes=
                "
                    (max-width: 375px) 327px,
                    (max-width: 768px) 281px,
                    (min-width: 769px) 540px
                "
                
                alt={props.name}
            />
            <div className="product-info">
                { props.new ? <p><span>NEW PRODUCT</span></p> : '' }
                <h1>{props.name.toUpperCase()}</h1>
                <p>{props.description}</p>
                <h3>{`$ ${props.price.toLocaleString('en-US')}`}</h3>
            </div>
            <div className="cart-add">
                <QuantityBtn item={1} />
                <CustomBtn href='/' ctaType={ctaType.PRIMARY}>add to cart</CustomBtn>
            </div>
        </section>
    );
};

export default MainProduct;


 // "
                //     /images/product-xx99-mark-two-headphones/mobile/image-product.jpg 327w,
                //     /images/product-xx99-mark-two-headphones/tablet/image-product.jpg 281w,
                //     /images/product-xx99-mark-two-headphones/desktop/image-product.jpg 540w
                // "