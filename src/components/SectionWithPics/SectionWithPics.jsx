import './SectionWithPics.css';
import { categories } from '../../utils/Categories.js';

const SectionWithPics = () => {
    return (
        <section className="section-with-pics">
            <div className="pic-container">
                {categories.map((category, index) => (
                    <div key={index} className="pic-item">
                        <img src={category.image} alt={category.title} className="pic" />
                        <p className="pic-title">{category.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionWithPics;