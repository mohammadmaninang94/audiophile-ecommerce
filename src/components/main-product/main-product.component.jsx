import './main-product.styles.scss';

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

const MainProduct = (props) => {
    return (
        <section className='main-product'>
            <div className="product-left">
                <picture>
                    <source media="(max-width: 559px)" srcSet={`${props.image.mobile}`} />
                    <source media="(max-width: 999px)" srcSet={`${props.image.tablet}`} />
                    <source media="(min-width: 1000px)" srcSet={`${props.image.desktop}`} />
                    <img src={`${props.image.mobile}`} alt={`${props.name}`} />
                </picture>
            </div>
            <div className="product-right">
                <div className="another-div">
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
                </div>
            </div>
        </section>
    );
};

export default MainProduct;