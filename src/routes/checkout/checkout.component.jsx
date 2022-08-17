import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomCta, { ctaTag, ctaType } from '../../components/custom-cta/custom-cta.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import RadioBtn from '../../components/radio-btn/radio-btn.component';


import './checkout.styles.scss';

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <CustomCta type={ctaType.LINK} tag={ctaTag.LINK}
                handleClick={() => navigate(-1)}>Go Back</CustomCta>
            <form className='checkout'>
                <section className='checkout__form'>
                    <h1>Checkout</h1>
                    <fieldset >
                        <legend>billing details</legend>
                        <div className='checkout__billing'>
                            <CustomInput id='name'
                                text='Name'
                                type='text'
                                placeholder='Insert your name'
                                required
                            />
                            <CustomInput id='email'
                                text='Email Address'
                                type='email'
                                placeholder='Insert your email'
                                required
                            />
                            <CustomInput id='phone'
                                text='Phone Number'
                                type='tel'
                                placeholder='Insert your phone number'
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>shipping info</legend>
                        <div className='checkout__shipping'>
                            <CustomInput id='address'
                                text='Address'
                                type='text'
                                placeholder='Insert your address'
                                required
                            />
                            <CustomInput id='zipcode'
                                text='ZIP Code'
                                type='text'
                                placeholder='Insert your ZIP Code'
                                required
                            />
                            <CustomInput id='city'
                                text='City'
                                type='text'
                                placeholder='Insert your City'
                                required
                            />
                            <CustomInput id='country'
                                text='Country'
                                type='text'
                                placeholder='Insert your Country'
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className='checkout__payment'>
                        <legend>payment details</legend>
                        <div className='checkout__payment-method'>
                            <strong>Payment Method</strong>
                            <RadioBtn name='paymenttype' value='e-money' text='e-Money' defaultChecked />
                            <RadioBtn name='paymenttype' value='cod' text='Cash on Delivery' />
                        </div>
                        <div className='e-money'>
                            <CustomInput id='emoney-number'
                                text='e-Money Number'
                                type='text'
                                placeholder='Insert your e-Money Number'
                                required
                            />
                            <CustomInput id='emoney-pin'
                                text='e-Money PIN'
                                type='text'
                                placeholder='Insert your e-Money PIN'
                                required
                            />
                        </div>
                    </fieldset>
                    <div className='checkout__cod-info'>
                        <img src='/images/checkout/icon-cash-on-delivery.svg' alt='COD icon' />
                        <p>The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                </section>
            </form>
        </Fragment>
    );
};

export default Checkout;