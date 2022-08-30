import './custom-input.styles.scss';

const CustomInput = ({ id, text, ...otherPorps }) => {
    return (
        <div className="input-box">
            <input id={id}  {...otherPorps} />
            <label htmlFor={id} className="input-box__label">{text}</label>
            <span className="input-box__error"></span>
        </div>
    );
};

export default CustomInput;