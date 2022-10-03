import './features.styles.scss';

const Features = (props) => {
    const splitParagraph = props.features.split("\n\n");
    return (
        <section className='features'>
            <div className='features-top'>
                <h2>Features</h2>
                <p>{splitParagraph[0]}<br /><br />{splitParagraph[1]}</p>
            </div>
            <div className='features-bottom'>
            	<h2>In The Box</h2>
                <div className='in-box'>
                    {props.includes.map((feature, i) => {
                        const {quantity, item} = feature;
                        return (
                            <p key={i}><span>{quantity}x</span> {item}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;