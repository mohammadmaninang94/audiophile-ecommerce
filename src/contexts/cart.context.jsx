import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const findExistingItem = (items, itemToAdd) =>
    items.find(item => item.id === itemToAdd.id);

const addItemToCart = (items, itemToAdd, quantityToAdd) => {
    const existingItem = findExistingItem(items, itemToAdd);
    const quantity = quantityToAdd ? quantityToAdd : 1;
    if (existingItem) {
        return items.map(item =>
            item.id === existingItem.id ?
                ({ ...item, quantity: item.quantity + quantity }) : item
        );
    };

    return [...items, { ...itemToAdd, quantity: quantity }];
};

const removeItemFromCart = (items, itemToRemove) => {
    const existingItem = findExistingItem(items, itemToRemove);

    if (existingItem) {
        if (existingItem.quantity === 1) {
            return items.filter(item => item.id !== existingItem.id);
        } else {
            return items.map(item =>
                item.id === existingItem.id ?
                    ({ ...item, quantity: item.quantity - 1 }) : item
            );
        }
    }

    return items;
};

export const CartContext = createContext({
    items: [],
    itemsCount: 0,
    itemsTotal: 0,
    addItem: () => null,
    removeItem: () => null,
    clearItem: () => null,
    extractItem: () => null,
    removeAllItems: () => null
});

export const CartProvider = ({ children }) => {
    const [localCartItems, setLocalCartItems] = useLocalStorage('cartItems', []);
    const [items, setItems] = useState(localCartItems);
    const [itemsCount, setItemsCount] = useState(0);
    const [itemsTotal, setItemsTotal] = useState(0);

    useEffect(() => {
        const newCount = items.reduce((total, item) => total + item.quantity, 0);
        const newTotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
        setItemsCount(newCount);
        setItemsTotal(newTotal);
        setLocalCartItems(items);
    }, [items]);

    const addItem = (item, quantity) => setItems(addItemToCart(items, item, quantity));

    const removeItem = (item) => setItems(removeItemFromCart(items, item));

    const extractItem = ({ id, name, price, thumbnailImage }) => {
        return { id, name, price, thumbnailImage, quantity: 1 };
    };

    const removeAllItems = () => setItems([]);

    const value = { items, itemsCount, itemsTotal, addItem, removeItem, extractItem, removeAllItems };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}