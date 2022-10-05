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
                        {/*<QuantityBtn item={1} />
                        <CustomBtn href='/' ctaType={ctaType.PRIMARY}>add to cart</CustomBtn>*/}
                        <QuantityBtn quantity={itemQuantity} addHandler={addItemHandler} removeHandler={removeItemHandler} />
                        <CustomBtn type="button" tag={ctaTag.BUTTON} ctaType={ctaType.PRIMARY} handleClick={addItemToCart}>add to cart</CustomBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProduct;