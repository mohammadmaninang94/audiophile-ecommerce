import CustomCta, { ctaType } from '../custom-cta/custom-cta.component';

import './latest-section.styles.scss';

const LatestSection = () => {
    return (
        <section className='latest-section'>
            <figure className='zx9'>
                <img src='/images/home/mobile/image-speaker-zx9.png'
                    srcSet="/images/home/mobile/image-speaker-zx9.png 320w,
                /images/home/tablet/image-speaker-zx9.png 366w,
                /images/home/desktop/image-speaker-zx9.png 756w"
                    sizes="25vw"
                    alt='zx9 speaker' />
                <figcaption>
                    <h1>zx9 speaker</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                </figcaption>
                <CustomCta href='/' ctaType={ctaType.TERTIARY}>see product</CustomCta>
            </figure>
            <figure className='zx7'>
                <picture>
                    <source media="(max-width: 375px)" srcSet="/images/home/mobile/image-speaker-zx7.jpg" />
                    <source media="(max-width: 768px)" srcSet="/images/home/tablet/image-speaker-zx7.jpg" />
                    <source media="(min-width: 769px)" srcSet="/images/home/desktop/image-speaker-zx7.jpg" />
                    <img src="/images/home/mobile/image-speaker-zx7.jpg" alt="zx7 speaker" />
                </picture>
                <div>
                    <figcaption><h4>zx7 speaker</h4></figcaption>
                    <CustomCta href='/' ctaType={ctaType.SECONDARY}>see product</CustomCta>
                </div>
            </figure>
            <figure className='yx1'>
                <picture>
                    <source media="(max-width: 375px)" srcSet="/images/home/mobile/image-earphones-yx1.jpg" />
                    <source media="(max-width: 768px)" srcSet="/images/home/tablet/image-earphones-yx1.jpg" />
                    <source media="(min-width: 769px)" srcSet="/images/home/desktop/image-earphones-yx1.jpg" />
                    <img src="/images/home/mobile/image-earphones-yx1.jpg" alt="zx7 speaker" />
                </picture>
                <div>
                    <figcaption><h4>yx1 earphones</h4></figcaption>
                    <CustomCta href='/' ctaType={ctaType.SECONDARY}>see product</CustomCta>
                </div>
            </figure>
        </section>
    );
};

export default LatestSection;