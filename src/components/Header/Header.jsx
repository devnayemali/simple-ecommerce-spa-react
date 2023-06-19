import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3">
                        <div className="logo">
                            <a href="/">Ema-Jon</a>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="menu text-end">
                            <ul className="mb-0">
                                <li><a href="/">Home</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/orders">Orders</a></li>
                                <li><a href="/cart">Cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;