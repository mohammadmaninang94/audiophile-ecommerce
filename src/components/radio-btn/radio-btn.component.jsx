import './radio-btn.styles.scss';

const RadioBtn = ({ name, value, text, defaultChecked, ...otherProps }) => {
    let className = '';

    if (defaultChecked) {
        className = 'radio-btn--active';
    }

    return (
        <label className={`radio-btn ${className}`}>
            <input type="radio" name={name} value={value} defaultChecked={defaultChecked} {...otherProps} />
            <span></span>
            {text}
        </label>
    );
};

export default RadioBtn;