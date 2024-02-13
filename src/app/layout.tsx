import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '20Million',
    description:
        'Build software products in realms of healthcare and financial services. Cloud enablement, AI tooling adaptation services are included as services',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
