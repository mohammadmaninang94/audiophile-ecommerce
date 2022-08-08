import './about-section.styles.scss';

const AboutSection = () => {
    return (
        <section className='about-section'>
            <div>
                <h2>Bringing you the <span>best</span> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <picture>
                <source media="(max-width: 375px)" srcSet="/images/shared/mobile/image-best-gear.jpg" />
                <source media="(max-width: 768px)" srcSet="/images/shared/tablet/image-best-gear.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/shared/desktop/image-best-gear.jpg" />
                <img src="/images/shared/mobile/image-best-gear.jpg" alt="zx7 speaker" />
            </picture>
        </section>
    );
};

export default AboutSection;