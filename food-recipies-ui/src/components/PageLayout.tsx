import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    content: JSX.Element
}

const PageLayout: React.FC<LayoutProps> = (props) => { 
    return (
        <React.Fragment>
            <Header></Header>
            <React.Fragment>{props.content}</React.Fragment>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default PageLayout;

