import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import logo from '../assets/logo.svg';

const Header: React.FC = () => { 
    return(
        <header>
            <div className="header_ads flex justify-center flex-align-center">
                <span className="">Recipe of the Day</span>
                <span className="text-micro ad-link">Click to follow</span>
            </div>
            <div><Menu /></div>
            <div className="logo"><Link to="/"><img alt="logo" src={logo} /></Link></div>
        </header>
    )
}

export default Header;