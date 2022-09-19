import './main-product.styles.scss';

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

const MainProduct = () => {
    return (
        <section className='main-product'>
            
            <img
                srcset=
                "
                    /images/product-xx99-mark-two-headphones/mobile/image-product.jpg 327w,
                    /images/product-xx99-mark-two-headphones/tablet/image-product.jpg 281w,
                    /images/product-xx99-mark-two-headphones/desktop/image-product.jpg 540w
                "

                sizes=
                "
                    (max-width: 375px) 327px,
                    (max-width: 768px) 281px,
                    (min-width: 769px) 540px
                "

                src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" 
                alt="xx99 mark two headphones"
            />
            <div className="product-info">
                <p><span>NEW PRODUCT</span></p>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <h3>$ 2,999</h3>
            </div>
            <div className="cart-add">
                <QuantityBtn quantity={1} />
                <CustomBtn href='/' type={ctaType.PRIMARY}>add to cart</CustomBtn>
            </div>
        </section>
    );
};

export default MainProduct;

// 
//  3x