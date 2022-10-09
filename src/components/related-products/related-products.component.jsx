import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';
import './related-products.styles.scss';

const RelatedProducts = (props) => {
    return (
        <section className='related-products'>
        	<h2>You May Also Like</h2>
            <div className='related-products-group'>
                {props.related.map((item, index) => {
                    const product = props.lookup(props.products, item.slug);

                    return (
                        <div key={index} className='single-related-product'>
                            <picture>
                                <source media="(max-width: 559px)" srcSet={item.image.mobile} />
                                <source media="(max-width: 999px)" srcSet={item.image.tablet} />
                                <source media="(min-width: 1000px)" srcSet={item.image.desktop} />
                                <img src={item.image.mobile} alt={item.name} />
                            </picture>
                            <h3>{item.name}</h3>
                            <CustomBtn href={`/${product.category}/${item.slug}`} ctaType={ctaType.PRIMARY} handleClick={() => window.scrollTo(0, 0)}>See Product</CustomBtn>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default RelatedProducts;