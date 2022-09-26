import { createContext, useState } from "react";

import productLists from '../products.json';

const productLookup = (products, productURL) =>
    products.find(product => product.slug === productURL);

const productLookupRelated = (products, otherSlug) =>
    products.find(product => product.slug === otherSlug);

export const ProductsContext = createContext({
    products: [],
    productLookup: () => null,
    productLookupRelated: () => null
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(productLists);
    const value = { products, productLookup, productLookupRelated };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};