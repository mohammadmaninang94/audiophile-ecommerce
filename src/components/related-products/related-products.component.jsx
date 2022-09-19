import './related-products.styles.scss';

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';

const RelatedProducts = () => {
    return (
        <section className='related-products'>
        	<h2>You May Also Like</h2>
            <div className='related-products-group'>
                <div className='single-related-product'>
                	<picture>
                		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" />
                		<img src="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="xx99 Mark One headphones" />
                	</picture>
                	<h3>xx99 Mark I</h3>
                    <CustomBtn href='/' type={ctaType.PRIMARY}>See Product</CustomBtn>
                </div>
                <div className='single-related-product'>
                	<picture>
                		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-xx59-headphones.jpg" />
                		<img src="/images/shared/mobile/image-xx59-headphones.jpg" alt="xx59 headphones" />
                	</picture>
                	<h3>xx59</h3>
                    <CustomBtn href='/' type={ctaType.PRIMARY}>See Product</CustomBtn>
                </div>
                <div className='single-related-product'>
                	<picture>
                		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-zx9-speaker.jpg" />
                		<img src="/images/shared/mobile/image-zx9-speaker.jpg" alt="zx9 speaker" />
                	</picture>
                	<h3>zx9 Speaker</h3>
                    <CustomBtn href='/' type={ctaType.PRIMARY}>See Product</CustomBtn>
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;