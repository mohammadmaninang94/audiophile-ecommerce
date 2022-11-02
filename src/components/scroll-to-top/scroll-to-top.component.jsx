import { useEffect, Fragment } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <Fragment>{children}</Fragment>
};

export default ScrollToTop;