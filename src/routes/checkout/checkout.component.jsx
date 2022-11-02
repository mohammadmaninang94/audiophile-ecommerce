import { Fragment, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomCta, { ctaTag, ctaType } from '../../components/custom-cta/custom-cta.component';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';


const Checkout = () => {
    const navigate = useNavigate();
    const { items } = useContext(CartContext);

    useEffect(() => {
        if (!items || items.length === 0) {
            navigate('/');
        }
    }, [items]);

    return (
        <Fragment>
            <CustomCta ctaType={ctaType.LINK} tag={ctaTag.LINK}
                handleClick={() => navigate(-1)}>Go Back</CustomCta>
            <CheckoutForm />
        </Fragment>
    );
};

export default Checkout;