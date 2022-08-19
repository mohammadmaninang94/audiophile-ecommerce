import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomCta, { ctaTag, ctaType } from '../../components/custom-cta/custom-cta.component';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';

import './checkout.styles.scss';

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <CustomCta ctaType={ctaType.LINK} tag={ctaTag.LINK}
                handleClick={() => navigate(-1)}>Go Back</CustomCta>
            <CheckoutForm />
        </Fragment>
    );
};

export default Checkout;