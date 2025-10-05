import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                // Optional offset if you have a fixed header (e.g. 100px)
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y }); // No 'behavior' means instant jump
            }
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;