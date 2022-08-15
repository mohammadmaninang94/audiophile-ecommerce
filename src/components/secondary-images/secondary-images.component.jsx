import './secondary-images.styles.scss';

const SecondaryImages = () => {
    return (
        <section className='secondary-images'>
            <div>
            	<picture>
	                <source media="(max-width: 375px)" srcSet="/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg" />
	                <img src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg" alt="xx99 Mark Two headphones" />
            	</picture>
            	<picture>
            		<source media="(max-width: 375px)" srcSet="/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg" />
            		<img src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg" alt="xx99 Mark Two headphones" />
            	</picture>
            	<picture>
            		<source media="(max-width: 375px)" srcSet="/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg" />
            		<img src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg" alt="xx99 Mark Two headphones" />
            	</picture>
            </div>
        </section>
    );
};

export default SecondaryImages;