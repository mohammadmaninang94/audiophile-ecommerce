
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './quantity-btn.styles.scss';

const QuantityBtn = ({ item }) => {
    const { addItem, removeItem } = useContext(CartContext);

    const addItemHandler = () => addItem(item);
    const removeItemHandler = () => removeItem(item);

    return (
        <div className="quantity-btn">
            <button type="button" onClick={removeItemHandler}>&minus;</button>
            <span>{item.quantity}</span>
            <button type="button" onClick={addItemHandler}>&#43;</button>
        </div>
    );
};

export default QuantityBtn;