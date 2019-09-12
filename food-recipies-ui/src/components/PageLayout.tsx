import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    content: JSX.Element
}

const PageLayout: React.FC<LayoutProps> = (props) => { 
    return (
        <section className="layout">
            <Header></Header>
            <main className="main-content">{props.content}</main>
            <Footer></Footer>
        </section>
    )
}

export default PageLayout;

