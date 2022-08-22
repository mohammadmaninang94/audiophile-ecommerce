import './main-product.styles.scss';

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';

const MainProduct = () => {
    return (
        <section className='main-product'>
            <picture>
                <source media="(max-width: 375px)" srcSet="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" />
                <source media="(max-width: 1167px)" srcSet="/images/product-xx99-mark-two-headphones/tablet/image-product.jpg" />
                <source media="(min-width: 1168px)" srcSet="/images/product-xx99-mark-two-headphones/desktop/image-product.jpg" />
                <img src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="xx99 mark two headphones" />
            </picture>
            <p><span>NEW PRODUCT</span></p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <h3>$ 2,999</h3>
            <CustomBtn href='/' type={ctaType.PRIMARY}>add to cart</CustomBtn>
        </section>
    );
};

export default MainProduct;