import React, { ReactNode } from 'react';
import Footer from './footer/footer';
import Navbar from './navBar/navBar';
import Contact from './contact/contact';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Contact />
        </>
    );
};

export default Layout;
