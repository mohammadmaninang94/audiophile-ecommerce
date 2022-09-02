import { createContext, useState, useEffect } from "react";

const findExistingItem = (items, itemToAdd) =>
    items.find(item => item.id === itemToAdd.id);

const addItemToCart = (items, itemToAdd) => {
    const existingItem = findExistingItem(items, itemToAdd);

    if (existingItem) {
        return items.map(item =>
            item.id === existingItem.id ?
                ({ ...item, quantity: item.quantity + 1 }) : item
        );
    };

    return [...items, { ...itemToAdd, quantity: 1 }];
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

const initialItems = [
    {
        id: 4, name: "XX99 Mark II",
        price: 2999, quantity: 1,
        thumbnailImage: '/images/cart/image-xx99-mark-two-headphones.jpg'
    },
    {
        id: 2, name: "XX59", price: 899, quantity: 2,
        thumbnailImage: "/images/cart/image-xx59-headphones.jpg"
    },
    {
        id: 1, name: "YX1 Wireless", price: 599, quantity: 1,
        thumbnailImage: "/images/cart/image-yx1-earphones.jpg"
    }
];

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(initialItems);
    const [itemsCount, setItemsCount] = useState(0);
    const [itemsTotal, setItemsTotal] = useState(0);

    useEffect(() => {
        const newCount = items.reduce((total, item) => total + item.quantity, 0);
        const newTotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
        setItemsCount(newCount);
        setItemsTotal(newTotal)
    }, [items]);

    const addItem = (item) => setItems(addItemToCart(items, item));
    const removeItem = (item) => setItems(removeItemFromCart(items, item));

    const extractItem = ({ id, name, price }) => {
        return { id, name, price };
    }
    
    const removeAllItems = () => setItems([]);

    const value = { items, itemsCount, itemsTotal, addItem, removeItem, extractItem, removeAllItems };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}