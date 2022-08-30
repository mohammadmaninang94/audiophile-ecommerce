
import { useState, useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';

import './checkout-modal.styless.scss';

const CheckoutModal = () => {
    const { toggleCheckoutModal } = useContext(AppContext);
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
                            <div className='checkout-modal__item'>
                                <img src='/images/cart/image-xx99-mark-two-headphones.jpg' alt='XX99 MK II' />
                                <div>
                                    <strong>XX99 MK II</strong>
                                    <span>$2,999</span>
                                </div>
                                <span className='checkout-modal__item-qty'>x1</span>
                            </div>
                            <div className='checkout-modal__item'>
                                <img src='/images/cart/image-xx59-headphones.jpg' alt='XX59' />
                                <div>
                                    <strong>XX59</strong>
                                    <span>$899</span>
                                </div>
                                <span className='checkout-modal__item-qty'>x2</span>
                            </div>
                            <div className='checkout-modal__item'>
                                <img src='/images/cart/image-yx1-earphones.jpg' alt='YX1' />
                                <div>
                                    <strong>YX1</strong>
                                    <span>$599</span>
                                </div>
                                <span className='checkout-modal__item-qty'>x1</span>
                            </div>
                        </div>
                        <CustomCta type="button" tag={ctaTag.BUTTON} ctaType={ctaType.LINK} handleClick={viewitemsHandler}>{viewLess ? 'and 2 other item(s)' : 'View less'}</CustomCta>
                    </div>
                    <div className='checkout-modal__total-box'>
                        <h6>grand total</h6>
                        <h5>$ 5,446</h5>
                    </div>
                </div>
                <CustomCta href='/' tag={ctaTag.DEFAULT} ctaType={ctaType.PRIMARY} handleClick={toggleCheckoutModal}>back to home</CustomCta>
            </div>
        </div>
    );
};

export default CheckoutModal;