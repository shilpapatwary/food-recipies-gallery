import React from 'react';
import PageLayout from './PageLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const Loading: React.FC = () => { 
    return(
        <PageLayout content={<span className="load-spin text-mega flex justify-center"><FontAwesomeIcon className="fa-spin" icon={faSpinner}></FontAwesomeIcon></span>}></PageLayout>
    )
}

export default Loading;