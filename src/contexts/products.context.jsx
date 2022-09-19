import { createContext, useState } from "react";

import productLists from '../products.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(productLists);

    const value = { products };

    return <ProductsContext value={value}>{children}</ProductsContext>
};