import React from 'react'

import logo from '../img/pizza-logo.svg';
import cart from '../img/cart.svg';

import Button from './Button';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
					
                <div className="header__cart">
                    <Button className='button--cart'>
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <img src={cart} alt='cart'></img>
                        <span>3</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
