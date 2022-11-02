import { useState, useRef, useContext } from 'react';

import CustomInput from '../custom-input/custom-input.component';
import RadioBtn from '../radio-btn/radio-btn.component';
import SummaryBox from '../summary-box/summary-box.component';

import { AppContext } from '../../contexts/app.context';

import './checkout-form.styles.scss';

const CheckoutForm = () => {
    const { toggleCheckoutModal } = useContext(AppContext);   

    const [isCOD, setCOD] = useState(false);
    const [isEMoney, setEMoney] = useState(true);
    const formRef = useRef(null);

    const paymentHandler = (e) => {
        setEMoney(!isEMoney);
        setCOD(!isCOD);
    };

    const formValid = () => {
        const form = formRef.current;
        const inputs = form.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            displayError(input);
        }

        return form.checkValidity();
    };

    const validate = (event) => {
        const elem = event.target;
        displayError(elem);
    };

    const displayError = (elem) => {
        const errorSpan = elem.parentNode.querySelector('.input-box__error');

        if (errorSpan) {
            if (elem.validity.valid) {
                errorSpan.textContent = '';
            } else {
                if (elem.validity.typeMismatch) {
                    errorSpan.textContent = 'Wrong format';
                } else {
                    errorSpan.textContent = elem.validationMessage;
                }
            }
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const isValid = formValid();

        if (isValid) {
            toggleCheckoutModal();
        }
    };

    return (
        <form className='checkout-form' ref={formRef} onSubmit={submitHandler} noValidate>
            <section className='checkout-form__wrapper'>
                <h1>Checkout</h1>
                <fieldset >
                    <legend>billing details</legend>
                    <div className='checkout-form__billing'>
                        <CustomInput id='name'
                            text='Name'
                            type='text'
                            placeholder='Insert your name'
                            onChange={validate}
                            required
                        />
                        <CustomInput id='email'
                            text='Email Address'
                            type='email'
                            placeholder='Insert your email'
                            onChange={validate}
                            required
                        />
                        <CustomInput id='phone'
                            text='Phone Number'
                            type='tel'
                            placeholder='Insert your phone number'
                            onChange={validate}
                            required
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>shipping info</legend>
                    <div className='checkout-form__shipping'>
                        <CustomInput id='address'
                            text='Address'
                            type='text'
                            placeholder='Insert your address'
                            onChange={validate}
                            required
                        />
                        <CustomInput id='zipcode'
                            text='ZIP Code'
                            type='text'
                            placeholder='Insert your ZIP Code'
                            onChange={validate}
                            required
                        />
                        <CustomInput id='city'
                            text='City'
                            type='text'
                            placeholder='Insert your City'
                            onChange={validate}
                            required
                        />
                        <CustomInput id='country'
                            text='Country'
                            type='text'
                            placeholder='Insert your Country'
                            onChange={validate}
                            required
                        />
                    </div>
                </fieldset>
                <fieldset className='checkout-form__payment'>
                    <legend className='checkout-form__payment-title'>payment details</legend>
                    <div className='checkout-form__payment-method'>
                        <strong>Payment Method</strong>
                        <RadioBtn name='paymenttype' value='e-money' text='e-Money' onChange={paymentHandler} defaultChecked={isEMoney} />
                        <RadioBtn name='paymenttype' value='cod' text='Cash on Delivery' onChange={paymentHandler} defaultChecked={isCOD} />
                    </div>
                    {isEMoney ?
                        (<div className='e-money'>
                            <CustomInput id='emoney-number'
                                text='e-Money Number'
                                type='text'
                                placeholder='Insert your e-Money Number'
                                onChange={validate}
                                required
                            />
                            <CustomInput id='emoney-pin'
                                text='e-Money PIN'
                                type='text'
                                placeholder='Insert your e-Money PIN'
                                onChange={validate}
                                required
                            />
                        </div>)
                        : null}
                </fieldset>
                <div className='checkout-form__cod-info'>
                    <img src='/images/checkout/icon-cash-on-delivery.svg' alt='COD icon' />
                    <p>The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            </section>
            <SummaryBox />
        </form>
    );
};

export default CheckoutForm;