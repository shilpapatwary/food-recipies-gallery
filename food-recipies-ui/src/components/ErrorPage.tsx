import React from 'react';
import PageLayout from './PageLayout';


const ErrorPage: React.FC = () => { 
    return(
        <PageLayout content={<span className="page-error text-mega flex justify-center">Page Not Found</span>}></PageLayout>
    )
}

export default ErrorPage;