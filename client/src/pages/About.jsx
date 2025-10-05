import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import { motion } from 'framer-motion';
import DecoratedTitle from "../components/DecoratedTitle";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const About = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout style={{ minHeight: '100vh', background: '#121212', color: '#f5f0e6' }}>
            <CustomHeader />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
            >
                <img
                    src='https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg'
                    alt='header'
                    style={{
                        width: '99vw',
                        height: '640px',
                        objectFit: 'cover',
                        marginTop: '-150px',
                        position: 'relative',
                        zIndex: 1,
                    }}
                />
            </motion.div>

            <DecoratedTitle text="Despre Mine" align="left" />

            <Content style={{ padding: isMobile ? '20px 10px' : '50px 20px', display: 'flex', justifyContent: 'center' }}>
                <section
                    style={{
                        maxWidth: 1100,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '40px',
                        fontFamily: 'Playfair Display SC, Roboto Mono',
                        lineHeight: 1.6,
                        color: '#dcd7cc',
                    }}
                >
                    {/* Text container */}
                    <div style={{ flex: '2 1 400px', minWidth: 280 }}>
                        <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>
                            Salut, sunt <strong>Luca</strong>, videograf si storyteller, specializat în surprinderea celor mai frumoase
                            momente din viața voastră.
                        </p>

                        <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>
                            De peste <strong>7</strong> ani, văd oamenii “cu alt ochi”... unul care are mereu zoom-ul la el!📸
                        </p>

                        <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '2.5rem', fontFamily: 'Playfair Display' }}>
                            Cele mai frumoase povești sunt cele naturale, iar eu sunt doar un martor tăcut, cu camera în mână.
                        </p>

                        <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '2.5rem', fontFamily: 'Playfair Display' }}>
                            Dacă mă vezi încruntat în timp ce filmez, nu înseamnă că vreau să te bat... Așa sunt eu :)).
                        </p>

                        <p
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.3rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#e3c9b6',
                                textTransform: "none"
                            }}
                        >
                            Hai să creăm împreună amintiri ce vor dăinui o viață întreagă.
                        </p>

                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    padding: isMobile ? '8px 16px' : '10px 20px',
                                    backgroundColor: '#d2b6a2',
                                    color: '#000000',
                                    fontSize: '1rem',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'Roboto Mono',
                                }}
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Image container */}
                    <div
                        style={{
                            flex: '1 1 400px',
                            minWidth: isMobile ? '100%' : 400,
                            maxHeight: isMobile ? '400px' : 'auto',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: '0 12px 24px rgba(0,0,0,0.7)',
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/luca_e9gaha.jpg'
                            alt="Profil"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            loading="lazy"
                        />
                    </div>
                </section>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default About;
