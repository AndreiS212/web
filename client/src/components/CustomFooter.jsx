import {Link} from "react-router-dom";
import React from "react";
import {Footer} from "antd/es/layout/layout";

const CustomFooter = () => {
    return (
        <Footer style={{
        textAlign: 'center',
        background: 'linear-gradient(to right, #2f2f2f, #000)',
        padding: '40px 0',
        color: '#fff',
        borderTop: '1px solid #d2b6a2',
        fontFamily: 'Segoe UI',
        fontSize: '14px',
    }}>
        <div>
            <p style={{fontSize: '16px', marginBottom: '20px'}}>
                <strong>AnDi Design</strong> ©{new Date().getFullYear()} - Created by Andrei Sigartau
            </p>
            <div style={{marginBottom: '20px'}}>
                <Link to="/privacy-policy" style={{color: '#d2b6a2', marginRight: '15px'}}>
                    Privacy Policy
                </Link>
                <Link to="/terms" style={{color: '#d2b6a2', marginRight: '15px'}}>
                    Terms of Service
                </Link>
                <Link to="/contact" style={{color: '#d2b6a2'}}>
                    Contact
                </Link>
            </div>
            <div style={{marginTop: '20px'}}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"
                       style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"
                       style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" style={{color: '#d2b6a2', fontSize: '18px'}}/>
                </a>
            </div>
        </div>
    </Footer>
    )
}

export default CustomFooter