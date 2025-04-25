import React from 'react';
import {Row, Col, Card, Modal, Layout, Menu} from 'antd';
import {useState} from 'react';
import {Link} from "react-router-dom";
import {Content, Header, Footer} from "antd/es/layout/layout";

const galleryImages = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    './image1.jpg',
    './image2.jpg',
];

const Gallery = () => {
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
                <div style={{backgroundColor: 'black', marginTop: '150px', position: 'relative', minHeight: '10vw' }}>
                    <h2 style={{ textAlign: 'center', color: '#d2b6a2', marginBottom: '2rem', fontSize: '50px', fontFamily: 'Playwrite RO, cursive' }}>
                        File de poveste
                    </h2>

                    <div
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: '10%',
                            width: '250px',
                            height: '250px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '8px solid #d2b6a2', // Champagne border
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: '40%',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '8px solid #d2b6a2', // Champagne border
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '25%',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[2]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '80%',
                            left: '70%',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[3]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <svg
                            width="100"
                            height="100"
                            style={{
                                position: 'absolute',
                                top: '50px',
                                right: '400px',
                            }}
                        >
                            <circle cx="50" cy="50" r="40" fill="#d2b6a2" />
                        </svg>
                        <svg
                            width="170"
                            height="170"
                            style={{
                                position: 'absolute',
                                bottom: '50px',
                                right: '600px',
                            }}
                        >
                            <circle cx="70" cy="70" r="70" fill="#d2b6a2" />
                        </svg>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '80%',
                            left: '10%',
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[4]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '75%',
                            width: '250px',
                            height: '250px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backgroundImage: `url(${galleryImages[5]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </div>
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

export default Gallery;
