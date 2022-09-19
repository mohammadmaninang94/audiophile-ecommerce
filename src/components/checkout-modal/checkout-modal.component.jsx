
import { useState, useContext } from 'react';

import { AppContext } from '../../contexts/app.context';
import { CartContext } from '../../contexts/cart.context';

import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';

import './checkout-modal.styless.scss';

const CheckoutModal = () => {
    const { toggleCheckoutModal } = useContext(AppContext);
    const { items, itemsTotal } = useContext(CartContext);
    const [viewLess, setViewLess] = useState(true);

    const viewitemsHandler = () => {
        setViewLess(!viewLess);
    };

    return (
        <div className='checkout-modal'>
            <div className='checkout-modal__dialog'>
                <img src='/images/checkout/icon-order-confirmation.svg' alt='order confirmation' />
                <h3><span>thank you</span> for your order</h3>
                <p>You will receive an email confirmation shortly.</p>
                <div className='checkout-modal__breakdown'>
                    <div className='checkout-modal__items'>
                        <div className={`checkout-modal__item-wrapper ${viewLess ? '' : 'checkout-modal__item-wrapper--more'}`}>
                            {items.map((item) => {
                                const { id, name, price, quantity, thumbnailImage } = item;
                                return (
                                    <div key={id} className='checkout-modal__item'>
                                        <img src={thumbnailImage} alt={name} />
                                        <div>
                                        <strong>{name}</strong>
                                        <span>$ {price.toLocaleString('en-US')}</span>
                                        </div>
                                        <span className='checkout-modal__item-qty'>x{quantity}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <CustomCta type="button" tag={ctaTag.BUTTON} ctaType={ctaType.LINK} handleClick={viewitemsHandler}>{viewLess ? 'and 2 other item(s)' : 'View less'}</CustomCta>
                    </div>
                    <div className='checkout-modal__total-box'>
                        <h6>grand total</h6>
                        <h5>$ {itemsTotal.toLocaleString('en-US')}</h5>
                    </div>
                </div>
                <CustomCta href='/' tag={ctaTag.DEFAULT} ctaType={ctaType.PRIMARY} handleClick={toggleCheckoutModal}>back to home</CustomCta>
            </div>
        </div>
    );
};

export default CheckoutModal;