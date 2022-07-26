import { useState, createContext } from 'react';

export const AppContext = createContext({
    menuHidden: true,
    toggleMenu: () => null,
    cartHidden: true,
    toggleCart: () => null,
    checkoutModalHidden: true,
    toggleCheckoutModal: () => null,
});

export const AppProvider = ({ children }) => {
    const [menuHidden, setMenuHidden] = useState(true);
    const [cartHidden, setCartHidden] = useState(true);
    const [checkoutModalHidden, setCheckoutModalHidden] = useState(true);

    const toggleMenu = () => {
        if (!cartHidden) {
            setCartHidden(!cartHidden);
        }
        setMenuHidden(!menuHidden);
    };

    const toggleCart = () => {
        if (!menuHidden) {
            setMenuHidden(!menuHidden);
        }
        setCartHidden(!cartHidden);
    };

    const toggleCheckoutModal = () => {
        setCheckoutModalHidden(!checkoutModalHidden);
    };

    const value = { menuHidden, toggleMenu, cartHidden, toggleCart, checkoutModalHidden, toggleCheckoutModal };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};