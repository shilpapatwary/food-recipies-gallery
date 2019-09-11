import React from 'react';
import { faQuestionCircle, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC = () => { 
    return(
        <div className="header-menu flex flex-direction-row justify-space-between">
            <div className="main--menu">
            <ul className="flex flex-direction-row">
                <li><FontAwesomeIcon icon={faQuestionCircle} /></li>
                <li><FontAwesomeIcon icon={faUser} /></li>
                <li><FontAwesomeIcon icon={faHeart} /></li>
            </ul>
            </div>
            <div className="main--menu flex flex-direction-row">
            <span>Follow us on:</span>
            <ul className="flex flex-direction-row">
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faPinterest} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
            </ul>
            </div>
        </div>
    )
}

export default Menu;