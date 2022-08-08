import { Link } from 'react-router-dom';

import './custom-cta.styles.scss';

export const ctaType = {
    PRIMARY: 'btn btn__primary',
    SECONDARY: 'btn btn__secondary',
    TERTIARY: 'btn btn__tertiary',
    LINK: 'link'
};

export const ctaTag = {
    DEFAULT: 'default',
    BUTTON: 'button',
    LINK: 'link'
}

const CustomBtn = ({ text, tag, type, href, handleClick, ...otherProps }) => {
    switch (tag) {
        case ctaTag.BUTTON:
            return (
                <button className={type} onClick={handleClick} {...otherProps}>{text}</button>
            );
        case ctaTag.LINK:
            return (
                <a href={href} className={type} onClick={handleClick} {...otherProps}>{text}</a>
            );
        default:
            return (
                <Link to={href} className={type}>{text}</Link>
            );
    }
};

export default CustomBtn;