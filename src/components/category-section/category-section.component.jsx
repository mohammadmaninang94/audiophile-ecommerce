import { useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

import CustomCta, { ctaType } from '../custom-cta/custom-cta.component';

import './category-section.styles.scss';


const categoryItems = [
    {
        title: 'headphones',
        slug: '/headphones',
        image: "/images/shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        title: 'speakers',
        slug: '/speakers',
        image: "/images/shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        title: 'earphones',
        slug: '/earphones',
        image: "/images/shared/desktop/image-category-thumbnail-earphones.png"
    }
];

const CategorySection = () => {

    const { menuHidden, toggleMenu } = useContext(AppContext);

    const handleClick = () => {
        if (!menuHidden) {
            toggleMenu();
        }
    };

    return (
        <section className='category-section'>
            {categoryItems.map(item => (
                <div key={item.title} className='category-box'>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h6>{item.title}</h6>
                        <CustomCta href={item.slug} ctaType={ctaType.LINK_ARROW} handleClick={handleClick}>shop</CustomCta>
                    </div>
                </div>
            ))}
        </section>
    )
};

export default CategorySection;