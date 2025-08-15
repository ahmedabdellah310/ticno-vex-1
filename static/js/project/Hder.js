import "./style/GlobelStyle.css";
import { useEffect, useState, useRef } from 'react';
import MenuListPage from "./MenuListPage";

export default function Hder() {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);
    // function  change background nav bar in scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [menuVew, setMenuVew] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu visibility
    const toggleMenu = () => {
        setMenuVew(prev => !prev);
    };

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Check if at top of page
            if (currentScrollY === 0) {
                setIsAtTop(true);
                setShowMenuButton(true);
            } else {
                setIsAtTop(false);
                // Show/hide menu button based on scroll direction
                if (currentScrollY > lastScrollY.current) {
                    // Scrolling down
                    setShowMenuButton(false);
                    setMenuVew(false);
                } else {
                    // Scrolling up
                    setShowMenuButton(true);
                }
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            {/* navbar removed as requested */}
            <div 
                className="menu-container"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: 'transform 0.3s ease-in-out',
                    transform: menuVew ? 'translateY(0)' : 'translateY(-100%)'
                }}
            >
                <MenuListPage Statue={menuVew} />
            </div>

        </>

    );


}