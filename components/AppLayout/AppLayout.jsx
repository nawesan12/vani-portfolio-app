export default function AppLayout({ children }) {

    const leftArrow = '&#8666;'
    const rightArrow = '&#8667';

    return (
        <>
            <header>
                {leftArrow}
            </header>
            <main>
                {children}    
            </main>    
            <footer>
                soy el footer
            </footer>
        </>
    );
}