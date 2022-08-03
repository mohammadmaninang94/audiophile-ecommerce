import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

export const BtnType = {
    PRIMARY: 'btn btn__primary',
    SECONDARY: 'btn btn__secondary',
    TERTIARY: 'btn btn__tertiary',
    LINK: 'link'
};

const CustomBtn = ({ text, href, type }) => {
    return (
        <Link to={href} className={type}>{text}</Link>
    )
};

export default CustomBtn;