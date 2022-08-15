import { Link } from 'react-router-dom';

import './custom-cta.styles.scss';

export const ctaType = {
    PRIMARY: 'btn btn--primary',
    SECONDARY: 'btn btn--secondary',
    TERTIARY: 'btn btn--tertiary',
    LINK: 'link',
    LINK_ARROW: 'link link--arrow'
};

export const ctaTag = {
    DEFAULT: 'default',
    BUTTON: 'button',
    LINK: 'link'
}

const CustomCta = ({ text, tag, type, href, handleClick, children, ...otherProps }) => {
    switch (tag) {
        case ctaTag.BUTTON:
            return (
                <button className={type} onClick={handleClick} {...otherProps}>{children}</button>
            );
        case ctaTag.LINK:
            return (
                <a href={href} className={type} onClick={handleClick} {...otherProps}>{children}</a>
            );
        default:
            return (
                <Link to={href} className={type} onClick={handleClick}>{children}</Link>
            );
    }
};

export default CustomCta;