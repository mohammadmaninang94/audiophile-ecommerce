import CustomCta, { ctaTag, ctaType } from '../custom-cta/custom-cta.component';

import './summary-box.styles.scss';

const SummaryBox = () => {
    return (
        <section className='summary-box'>
            <div className='summary-box__header'>
                <h6>summary</h6>
            </div>
            <div className='summary-box__body'>
                <div className='summary-box__item'>
                    <img src='/images/cart/image-xx99-mark-two-headphones.jpg' alt='XX99 MK II' />
                    <div>
                        <strong>XX99 MK II</strong>
                        <span>$2,999</span>
                    </div>
                    <span className='summary-box__item-qty'>x1</span>
                </div>
                <div className='summary-box__item'>
                    <img src='/images/cart/image-xx59-headphones.jpg' alt='XX59' />
                    <div>
                        <strong>XX59</strong>
                        <span>$899</span>
                    </div>
                    <span className='summary-box__item-qty'>x2</span>
                </div>
                <div className='summary-box__item'>
                    <img src='/images/cart/image-yx1-earphones.jpg' alt='YX1' />
                    <div>
                        <strong>YX1</strong>
                        <span>$599</span>
                    </div>
                    <span className='summary-box__item-qty'>x1</span>
                </div>
            </div>
            <div className='summary-box__footer'>
                <div>
                    <div className='summary-box__total'>
                        <span>Total</span>
                        <strong>$ 5,396</strong>
                    </div>
                    <div className='summary-box__total'>
                        <span>Shipping</span>
                        <strong>$ 50</strong>
                    </div>
                    <div className='summary-box__total'>
                        <span>vat (included)</span>
                        <strong>$ 1,079</strong>
                    </div>
                </div>
                <div className='summary-box__grand-total'>
                    <span>grand total</span>
                    <strong>$ 5,446</strong>
                </div>
                <CustomCta ctaType={ctaType.PRIMARY} tag={ctaTag.BUTTON} href='checkout' type='submit'>checkout</CustomCta>
            </div>
        </section>
    );
};

export default SummaryBox;