import { useState, useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CustomBtn, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

import './main-product.styles.scss';


const MainProduct = (props) => {
    const { addItem } = useContext(CartContext);

    const [itemQuantity, setItemQuantity] = useState(1);
    const addItemHandler = () => setItemQuantity(itemQuantity + 1);
    const removeItemHandler = () => itemQuantity > 1 ? setItemQuantity(itemQuantity - 1) : null;
    const addItemToCart = () => { 
        addItem(props.item, itemQuantity);
        setItemQuantity(1);
    };
    return (
        <section className='main-product'>
            <img
                src={props.image.mobile}
                srcSet={`${props.image.mobile} 654w,
                    ${props.image.tablet} 562w,
                    ${props.image.desktop} 1080w`}
                sizes="(max-width: 375px) 327px,
                    (max-width: 768px) 281px,
                    (min-width: 769px) 540px"
                alt={props.name} />
            <div className="product-info">
                {props.new ? <p><span>NEW PRODUCT</span></p> : ''}
                <h1>{props.name.toUpperCase()}</h1>
                <p>{props.description}</p>
                <h3>{`$ ${props.price.toLocaleString('en-US')}`}</h3>
            </div>
            <div className="cart-add">
                <QuantityBtn quantity={itemQuantity} addHandler={addItemHandler} removeHandler={removeItemHandler} />
                <CustomBtn type="button" tag={ctaTag.BUTTON} ctaType={ctaType.PRIMARY} handleClick={addItemToCart}>add to cart</CustomBtn>
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