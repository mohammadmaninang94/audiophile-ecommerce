import { useContext } from 'react';

import { AppContext } from '../../contexts/app.context';
import { CartContext } from '../../contexts/cart.context';

import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

import './cart-box.styles.scss';

const CartBox = () => {
    const { toggleCart } = useContext(AppContext);
    const { items, itemsCount, itemsTotal, removeAllItems } = useContext(CartContext);
    
    return (
        <div className='cart-box'>
            <div className='cart-box__header'>
                <h6>cart ({itemsCount})</h6>
                <CustomCta ctaType={ctaType.LINK} tag={ctaTag.LINK} handleClick={removeAllItems}>Remove all</CustomCta>
            </div>
            <div className='cart-box__body'>
                {items.map((item) => {
                    const { id, name, price, thumbnailImage } = item;
                    return (
                        <div key={id} className='cart-box__item'>
                            <img src={thumbnailImage} alt={name} />
                            <div>
                                <strong>{name}</strong>
                                <span>$ {price.toLocaleString('en-US')}</span>
                            </div>
                            <QuantityBtn item={item} />
                        </div>
                    )
                })}
            </div>
            <div className='cart-box__footer'>
                <div className='cart-box__total-box'>
                    <span>Total</span>
                    <strong>$ {itemsTotal.toLocaleString('en-US')}</strong>
                </div>
                <CustomCta ctaType={ctaType.PRIMARY} href='checkout' handleClick={toggleCart}>checkout</CustomCta>
            </div>
        </div>
    );
};

export default CartBox;