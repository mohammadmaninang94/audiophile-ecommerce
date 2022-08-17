import './radio-btn.styles.scss';

const RadioBtn = ({ name, value, text, ...otherProps }) => {
    return (
        <label className="radio-btn">
            <input type="radio" name={name} value={value} {...otherProps}/>
            <span></span>
            {text}
        </label>
    );
};

export default RadioBtn;