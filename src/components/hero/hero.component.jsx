import { Routes, Route } from 'react-router-dom';

import CustomCta, { ctaType } from '../custom-cta/custom-cta.component';

import './hero.styles.scss';

const Hero = () => {
    return (
        <Routes>
            <Route index element={
                <div className='hero'>
                    <p className='hero__overline'>NEW PRODUCT</p>
                    <h1 className='hero__header'>XX99 Mark II Headphones</h1>
                    <p className='hero__body'>Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <CustomCta href='/' ctaType={ctaType.PRIMARY}>see product</CustomCta>
                </div>
            } />
            <Route path='headphones' element={<h1 className='hero__header hero__header--2'>headphones</h1>} />
            <Route path='speakers' element={<h1 className='hero__header hero__header--2'>speakers</h1>} />
            <Route path='earphones' element={<h1 className='hero__header hero__header--2'>earphones</h1>} />
        </Routes>
    )
};

export default Hero;