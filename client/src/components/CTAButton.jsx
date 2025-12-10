import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CTAButton = ({ text = "Spune-mi despre evenimentul vostru", to = "/contact" }) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <button
            onClick={() => navigate(to)}
            style={{
                padding: isMobile ? "5px 15px" : "12px 32px",
                fontSize: isMobile ? "0.5rem" : "1.1rem",
                backgroundColor: "transparent",
                border: "1px solid #d2b6a2",
                color: "#d2b6a2",
                textTransform: "uppercase",
                fontFamily: "'Playfair Display SC', serif",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginTop: isMobile ? "20px" : "30px",
                borderRadius: "0",
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d2b6a2";
                e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#d2b6a2";
            }}
        >
            {text}
        </button>
    );
};

export default CTAButton;
