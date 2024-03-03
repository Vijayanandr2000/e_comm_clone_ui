import './Header.css';

import { Images } from '../../utils/Image';

const Header = () => {
    return (
        <header className="header">
            <div className="flex-start">
                <img src={Images.pageLogo} alt="Logo" className="logo" />
            </div>
            <div className="flex-end">
                <div className="search-container">
                    <input type="text" placeholder="Search for a product/items" className="search-input" />
                    <img src={Images.searchIcon} alt="Search Icon" className="search-icon" />
                </div>
                <button className="login-btn">Login</button>
                <button className="cart-btn">
                    <img src={Images.cartIcon} alt="Cart Icon" className="cart-icon" />
                    <span>Cart</span>
                </button>

            </div>
        </header>
    );
};

export default Header;
