import React from 'react';
import Layout from '../Components/Layout';
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';

interface MyAppProps {
    Component: React.ComponentType;
    pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default MyApp;
