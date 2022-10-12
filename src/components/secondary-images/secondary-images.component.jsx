import './secondary-images.styles.scss';

const SecondaryImages = (props) => {
    return (
        <section className='secondary-images'>
            <div className='pics'>
                <div className='pics-left'>
                    <div className='first-pic'>
                        <picture>
                            <source media="(max-width: 559px)" srcSet={props.first.mobile} />
                            <source media="(max-width: 999px)" srcSet={props.first.tablet} />
                            <source media="(min-width: 1000px)" srcSet={props.first.desktop} />
                            <img src={props.first.mobile} alt={props.alt} />
                        </picture>
                    </div>
                    <div className='second-pic'>
                        <picture>
                            <source media="(max-width: 559px)" srcSet={props.second.mobile} />
                            <source media="(max-width: 999px)" srcSet={props.second.tablet} />
                            <source media="(min-width: 1000px)" srcSet={props.second.desktop} />
                            <img src={props.second.mobile} alt={props.alt} />
                        </picture>
                    </div>
                </div>
                <div className='pics-right'>
                    <div className='third-pic'>
                        <picture>
                            <source media="(max-width: 559px)" srcSet={props.third.mobile} />
                            <source media="(max-width: 999px)" srcSet={props.third.tablet} />
                            <source media="(min-width: 1000px)" srcSet={props.third.desktop} />
                            <img src={props.third.mobile} alt={props.alt} />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondaryImages;