import { useState, createContext } from 'react';

export const AppContext = createContext({
    menuHidden: true,
    setMenuHidden: () => null
});

export const AppProvider = ({ children }) => {
    const [menuHidden, setMenuHidden] = useState(true);
    const [cartHidden, setCartHidden] = useState(true);

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

    const value = { menuHidden, toggleMenu, cartHidden, toggleCart };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};