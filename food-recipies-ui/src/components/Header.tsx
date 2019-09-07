import React from 'react';
import Menu from './Menu';
import logo from '../assets/logo.svg';
const Header: React.FC = () => { 
    return(
        <header>
            <div className="header_ads flex justify-center flex-align-center">
                <span className="">Recipie of the Day</span>
                <span className="text-micro ad-link"><a href="#">Click to follow</a></span>
            </div>
            <div><Menu /></div>
            <div className="logo flex justify-center"><img src={logo} /></div>
        </header>
    )
}

export default Header;