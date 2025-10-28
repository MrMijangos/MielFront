import React, { useState } from 'react';
import './header.css';

function Header() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/assets/logo.png" alt="Logo Miel de la Selva Maya" />
                </div>
                
                <div className="search-bar">
                    <input type="text" placeholder="Buscar productos..." />
                    <button type="button" className="search-btn">
                        <i className='bx bx-search'></i>
                    </button>
                </div>
                
                <div className="header-icons">
                    <button className="icon-btn cart-btn">
                        <i className='bx bx-cart'></i>
                        <span className={`cart-count ${cartCount > 0 ? 'active' : ''}`}>
                            {cartCount}
                        </span>
                    </button>
                    <button className="icon-btn user-btn">
                        <i className='bx bx-user'></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;