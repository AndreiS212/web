import React from 'react';
import {Breadcrumb, Layout, Menu, theme, Flex, Splitter, Typography, Carousel, Card} from 'antd';
import './Homepage.css';
import { Link } from 'react-router-dom';  // Import from react-router-dom

const { Header, Content, Footer } = Layout;

const About = () => {
    const items = [
        ...['Acasa', 'Povestea noastra', 'Galerie', 'Testimoniale', 'Servicii', 'Contact', 'Login'].map(key => ({
            key,
            label: (
                <Link to={
                    key === 'Galerie' ? '/gallery' :
                        key === 'Testimoniale' ? '/reviews' :
                            key === 'Contact' ? '/contact' :
                                key === 'Povestea noastra' ? '/about' :
                                    key === 'Servicii' ? '/services' :
                                        key === 'Login' ? '/admin' :
                                            '/'
                }>
                    {key}
                </Link>
            ),
        }))
    ];
    return (
        <Layout style={{minHeight: '100vh', background: 'black'}}>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                background: 'transparent',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', height: '100px'}}>
                    <Link to="/">
                        <img
                            src="/image0.png"
                            alt="Logo"
                            style={{
                                width: '500px',
                                height: '100px',
                                cursor: 'pointer',
                                zIndex: 10,
                                position: 'relative'
                            }}
                        />
                    </Link>
                </div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        background: 'transparent',
                        display: 'flex',
                        justifyContent: 'center',
                        borderBottom: 'none',
                        marginTop: '20px',
                        zIndex: 10,
                        position: 'relative',
                    }}
                    className="custom-menu"
                />

            </Header>
            <Content>

            </Content>
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
        </Layout>
    );
};

export default About;