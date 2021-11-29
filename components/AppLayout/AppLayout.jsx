import Link from 'next/link';

import Footer from './Footer';
import Header from './Header';

export default function AppLayout({ children }) {

    const leftArrow = '&#8666;'
    const rightArrow = '&#8667';

    return (
        <>
            <Header/>
            <main>
                {children}    
            </main>    
            <Footer/>
        </>
    );
}