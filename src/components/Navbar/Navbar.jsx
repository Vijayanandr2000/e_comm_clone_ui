import './Navbar.css';

import { categories } from '../../utils/Categories.js';

const NavBar = () => {
    return (
        <nav className="navbar">
            {categories.map((category, index) => (
                <span key={index} className="nav-item">{category.title}</span>
            ))}
        </nav>
    );
};

export default NavBar;