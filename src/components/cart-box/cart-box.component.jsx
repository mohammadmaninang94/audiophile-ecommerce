import { useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';
import QuantityBtn from '../quantity-btn/quantity-btn.component';

import './cart-box.styles.scss';

const CartBox = () => {
    const { toggleCart } = useContext(AppContext);

    return (
        <div className='cart-box'>
            <div className='cart-box__header'>
                <h6>cart (3)</h6>
                <CustomCta type={ctaType.LINK} tag={ctaTag.LINK}>Remove all</CustomCta>
            </div>
            <div className='cart-box__body'>
                <div className='cart-box__item'>
                    <img src='/images/cart/image-xx99-mark-two-headphones.jpg' alt='XX99 MK II' />
                    <div>
                        <strong>XX99 MK II</strong>
                        <span>$2,999</span>
                    </div>
                    <QuantityBtn quantity={1} />
                </div>
                <div className='cart-box__item'>
                    <img src='/images/cart/image-xx59-headphones.jpg' alt='XX59' />
                    <div>
                        <strong>XX59</strong>
                        <span>$899</span>
                    </div>
                    <QuantityBtn quantity={2} />
                </div>
                <div className='cart-box__item'>
                    <img src='/images/cart/image-yx1-earphones.jpg' alt='YX1' />
                    <div>
                        <strong>YX1</strong>
                        <span>$599</span>
                    </div>
                    <QuantityBtn quantity={1} />
                </div>
            </div>
            <div className='cart-box__footer'>
                <div className='cart-box__total-box'>
                    <span>Total</span>
                    <strong>$ 5,396</strong>
                </div>
                <CustomCta type={ctaType.PRIMARY} href='checkout' handleClick={toggleCart}>checkout</CustomCta>
            </div>

        </div>
    );
};

export default CartBox;