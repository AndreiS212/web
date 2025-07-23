import {Link} from "react-router-dom";
import React from "react";
import { Footer } from "antd/es/layout/layout";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const CustomFooter = () => {
    return (
        <Footer style={{
        textAlign: 'center',
        background: 'linear-gradient(to right, #2f2f2f, #000)',
        // padding: '40px 0',
        color: '#fff',
        borderTop: '1px solid #d2b6a2',
        fontFamily: 'Playfair Display',
        fontSize: '14px',
    }}>
        <div>
            <Link to="/" style={{ marginBottom: '8px' }}>
                <img
                    src="/logogold.png"
                    alt="Logo"
                    style={{
                        height: '60px',
                        width: 'auto',
                        cursor: 'pointer',
                    }}
                />
            </Link>
            <div style={{marginTop: '20px'}}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"
                       style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                </a>
                <a href="https://instagram.com/lucasframes.storyteller" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"
                       style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                </a>
            </div>
            {/* Copyright */}
            <div style={{ fontSize: '11px', color: '#aaa', marginTop: '20px' }}>
                © {new Date().getFullYear()} Luca's Frames. Toate drepturile rezervate.
            </div>
        </div>
    </Footer>
    )
}

export default CustomFooter