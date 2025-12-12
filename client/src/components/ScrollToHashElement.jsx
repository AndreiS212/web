import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.replace("#", "");
        const HEADER_OFFSET = window.innerWidth <= 768 ? 70 : 120;

        const scrollToElement = () => {
            const el = document.getElementById(id);
            if (!el) return false;

            const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
            window.scrollTo({ top, behavior: "auto" });
            return true;
        };

        // Try immediately
        if (scrollToElement()) return;

        // Retry until the element and its images/videos fully load (max 20 tries)
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (scrollToElement() || attempts > 20) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [location]);

    return null;
};

export default ScrollToHashElement;
