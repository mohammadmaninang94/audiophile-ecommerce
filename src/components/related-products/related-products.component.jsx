import './related-products.styles.scss';

const RelatedProducts = () => {
    return (
        <section className='related-products'>
            <div>
            	<h2>You May Also Like</h2>
            	<picture>
            		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" />
            		<img src="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="xx99 Mark One headphones" />
            	</picture>
            	<h3>xx99 Mark I</h3>
            	<a className='btn btn__primary' href="/">See Product</a>
            	<picture>
            		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-xx59-headphones.jpg" />
            		<img src="/images/shared/mobile/image-xx59-headphones.jpg" alt="xx59 headphones" />
            	</picture>
            	<h3>xx59</h3>
            	<a className='btn btn__primary' href="/">See Product</a>
            	<picture>
            		<source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-zx9-speaker.jpg" />
            		<img src="/images/shared/mobile/image-zx9-speaker.jpg" alt="zx9 speaker" />
            	</picture>
            	<h3>zx9 Speaker</h3>
            	<a className='btn btn__primary' href="/">See Product</a>
            </div>
        </section>
    );
};

export default RelatedProducts;