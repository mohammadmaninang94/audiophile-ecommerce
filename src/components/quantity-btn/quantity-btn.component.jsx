
import './quantity-btn.styles.scss';

const QuantityBtn = ({ quantity, addHandler, removeHandler }) => {
    return (
        <div className="quantity-btn">
            <button type="button" onClick={removeHandler}>&minus;</button>
            <span>{quantity}</span>
            <button type="button" onClick={addHandler}>&#43;</button>
        </div>
    );
};

export default QuantityBtn;