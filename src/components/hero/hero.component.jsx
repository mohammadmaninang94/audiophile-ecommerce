

import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';

import './hero.styles.scss';

const Hero = () => {
    return (
        <div className='hero'>
            <p className='hero__overline'>NEW PRODUCT</p>
            <h1 className='hero__header'>XX99 Mark II Headphones</h1>
            <p className='hero__body'>Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
            <CustomBtn text='see product' href='/' type={ctaType.PRIMARY} />
        </div>
    )
};

export default Hero;