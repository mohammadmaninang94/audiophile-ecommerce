import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';

import './category-product.styles.scss';
import { newArr } from '../../helpers/helpers'

const CategoryProduct = (props) => {
    
    return (
        <section className='category-page'>
            {props.categoryArr.map((product, index) => 
                <div className={`category-product category-product--med category-product--large ${index % 2 ? 'flip' : ''}`} key={index}>
                    <div className='category-product--left'>
                        <div className='category-product__image'>
                            <picture>
                                <source media="(max-width: 559px)" srcSet={`${product.categoryImage.mobile}`} />
                                <source media="(max-width: 999px)" srcSet={`${product.categoryImage.tablet}`} />
                                <source media="(min-width: 1000px)" srcSet={`${product.categoryImage.desktop}`} />
                                <img src={`${product.categoryImage.mobile}`} alt={`${product.name}`} />
                            </picture>
                        </div>
                    </div>
                    <div className='category-product--right'>
                        { product.new ? <div className='category-product__new'><p><span>NEW PRODUCT</span></p></div> : '' }
                        <h2 className='category-product__name'>{`${newArr(product.name.split(' '))}\u000A${product.category.toUpperCase()}`}</h2>
                        <p className='category-product__description' >{product.description}</p>
                        <CustomBtn className='category-product__button' href={`/${product.category}/${product.slug}`} ctaType={ctaType.PRIMARY} handleClick={() => window.scrollTo(0, 0)}>See Product</CustomBtn>
                    </div>
                </div>
            ).reverse()}
        </section>
    );
};

export default CategoryProduct;