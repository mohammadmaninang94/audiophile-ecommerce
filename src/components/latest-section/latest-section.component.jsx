import CustomBtn, { BtnType } from '../custom-button/custom-button.component';

import './latest-section.styles.scss';

const LatestSection = () => {
    return (
        <section className='latest-section'>
            <figure className='zx9'>
                <img src='/images/home/mobile/image-speaker-zx9.png' alt='zx9 speaker' />
                <figcaption>
                    <h1>zx9 speaker</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                </figcaption>
                <CustomBtn text='see product' href='/' type={BtnType.TERTIARY} />
            </figure>
            <figure className='zx7'>
                <img src='/images/home/mobile/image-speaker-zx7.jpg' alt='zx7 speaker' />
                <div>
                    <figcaption><h4>zx7 speaker</h4></figcaption>
                    <CustomBtn text='see product' href='/' type={BtnType.SECONDARY} />
                </div>
            </figure>
            <figure className='yx1'>
                <img src='/images/home/mobile/image-earphones-yx1.jpg' alt='yx1 earphones' />
                <div>
                    <figcaption><h4>yx1 earphones</h4></figcaption>
                    <CustomBtn text='see product' href='/' type={BtnType.SECONDARY} />
                </div>
            </figure>
        </section>
    );
};

export default LatestSection;