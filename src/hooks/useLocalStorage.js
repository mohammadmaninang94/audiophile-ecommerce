import { useState, useEffect } from 'react';

const useLocalStorage = (key, value) => {
    let localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {
        localStorageValue = JSON.parse(localStorageValue);
    } else {
        localStorageValue = value;
        localStorage.setItem(key, JSON.stringify(value));
    }

    const [state, setState] = useState(localStorageValue);

    // didn't use useEffeect to populate state since I am trying to 
    // to get the the state as initial state on other components
    // useEffect(() => {
    //     if (localStorageValue) {
    //         setState(JSON.parse(localStorageValue));
    //     } else {
    //         localStorage.setItem(key, JSON.stringify(value));
    //     }
    // }, []);

    const update = (to) => {
        setState(to)
        localStorage.setItem(key, JSON.stringify(to));
    };

    const remove = () => {
        setState(null)
        localStorage.removeItem(key)
    };

    return [state, update, remove];
};

export default useLocalStorage;