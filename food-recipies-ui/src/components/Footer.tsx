import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => { 
    return(
        <footer>
            <div className="recipes-footer text text-micro letter-spacing-large flex flex-align-center">
            <span className="copyright"><FontAwesomeIcon icon={faCopyright} /> CHEF ABODE</span>
            <span>TERMS & CONDITIONS</span>
            </div>
        </footer>
    )
}

export default Footer;