import { useContext } from 'react';

import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';

import { AppContext } from '../../contexts/app.context';
import { CartContext } from '../../contexts/cart.context';

import './summary-box.styles.scss';


const SummaryBox = () => {
    const { toggleCheckoutModal } = useContext(AppContext);
    const { items, itemsTotal } = useContext(CartContext);
    const shippingCost = 50;
    const vat = 0.19;
    const vatTotal = parseInt((itemsTotal + shippingCost) * vat);
    const grandTotal = itemsTotal + shippingCost + vatTotal;

    return (
        <section className='summary-box'>
            <div className='summary-box__header'>
                <h6>summary</h6>
            </div>
            <div className='summary-box__body'>
                {items.map((item) => {
                    const { id, name, price, quantity, thumbnailImage } = item;
                    return (
                        <div key={id} className='summary-box__item'>
                            <img src={thumbnailImage} alt={name} />
                            <div>
                                <strong>{name}</strong>
                                <span>$ {price.toLocaleString('en-US')}</span>
                            </div>
                            <span className='summary-box__item-qty'>x{quantity}</span>
                        </div>
                    )
                })}
            </div>
            <div className='summary-box__footer'>
                <div>
                    <div className='summary-box__total'>
                        <span>Total</span>
                        <strong>$ {itemsTotal.toLocaleString('en-US')}</strong>
                    </div>
                    <div className='summary-box__total'>
                        <span>Shipping</span>
                        <strong>$ {shippingCost.toLocaleString('en-US')}</strong>
                    </div>
                    <div className='summary-box__total'>
                        <span>vat (included)</span>
                        <strong>$ {vatTotal.toLocaleString('en-US')}</strong>
                    </div>
                </div>
                <div className='summary-box__grand-total'>
                    <span>grand total</span>
                    <strong>$ {grandTotal.toLocaleString('en-US')}</strong>
                </div>
                <CustomCta ctaType={ctaType.PRIMARY} tag={ctaTag.BUTTON} type='submit' onClick={toggleCheckoutModal}>checkout</CustomCta>
            </div>
        </section>
    );
};

export default SummaryBox;