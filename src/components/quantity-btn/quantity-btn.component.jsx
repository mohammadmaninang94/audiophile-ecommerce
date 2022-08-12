


import './quantity-btn.styles.scss';

const QuantityBtn = ({ quantity, minusHandler, addHandler }) => {
    return (
        <div className="quantity-btn">
            <button type="button" onClick={minusHandler}>&minus;</button>
            <span>{quantity}</span>
            <button type="button" onClick={addHandler}>&#43;</button>
        </div>
    );
};

export default QuantityBtn;