import './secondary-images.styles.scss';

const SecondaryImages = (props) => {
    return (
        <section className='secondary-images'>
            <div className='pics'>
            	<picture>
                    {/*Possible options to iterate through gallery -> https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays*/}
                    <source media="(max-width: 375px)" srcSet={props.first.mobile} />
                    <img src={props.first.mobile} alt={props.alt} />
            	</picture>
            	<picture>
            		<source media="(max-width: 375px)" srcSet={props.second.mobile} />
                    <img src={props.second.mobile} alt={props.alt} />
            	</picture>
            	<picture>
            		<source media="(max-width: 375px)" srcSet={props.third.mobile} />
                    <img src={props.third.mobile} alt={props.alt} />
            	</picture>
            </div>
        </section>
    );
};

export default SecondaryImages;