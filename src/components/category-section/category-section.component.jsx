import CustomBtn, { ctaType } from '../custom-cta/custom-cta.component';

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
    return (
        <section className='category-section'>
            {categoryItems.map(item => (
                <div key={item.title} className='category-box'>
                    <img src={item.image} alt={item.title} />
                    <div></div>
                    <div>
                        <h6>{item.title}</h6>
                        <CustomBtn text='shop' href={item.slug} type={ctaType.LINK} />
                    </div>
                </div>
            ))}
        </section>
    )
};

export default CategorySection;