import { Link } from "react-router-dom";
import React from "react";
import { Footer } from "antd/es/layout/layout";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const CustomFooter = () => {
    return (
        <Footer
            style={{
                textAlign: "center",
                background: "linear-gradient(to right, #2f2f2f, #000)",
                color: "#fff",
                borderTop: "1px solid #d2b6a2",
                fontFamily: "Playfair Display",
                fontSize: "14px",
            }}
        >
            <div>
                <Link to="/" style={{ marginBottom: "8px" }}>
                    <img
                        src="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262024/logogold_v630lh.png"
                        alt="Logo"
                        style={{
                            height: "60px",
                            width: "auto",
                            cursor: "pointer",
                        }}
                    />
                </Link>

                <div style={{ marginTop: "20px" }}>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-facebook"
                            style={{
                                color: "#d2b6a2",
                                marginRight: "20px",
                                fontSize: "18px",
                            }}
                        />
                    </a>
                    <a
                        href="https://instagram.com/lucasframes.storyteller"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-instagram"
                            style={{
                                color: "#d2b6a2",
                                marginRight: "20px",
                                fontSize: "18px",
                            }}
                        />
                    </a>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        fontSize: "12px",
                        color: "#aaa",
                        marginTop: "20px",
                        lineHeight: "1.6",
                        fontFamily: "Roboto Mono, monospace"
                    }}
                >
                    © {new Date().getFullYear()} Luca's Frames. Toate drepturile rezervate.
                    Acest site folosește clipuri Vimeo și un formular de contact.
                    Nu folosim cookie-uri de urmărire sau analize.
                    <br />
                    <Link
                        to="/PrivacyPolicy"
                        style={{
                            color: "#d2b6a2",
                            textDecoration: "underline",
                            marginLeft: "4px",
                            fontFamily: "Roboto Mono, monospace"
                        }}
                    >
                        Politica de confidențialitate
                    </Link>
                </div>
            </div>
        </Footer>
    );
};

export default CustomFooter;
