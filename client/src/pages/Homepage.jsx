import React from 'react';
import {Layout, Menu, theme, Carousel, Row, Col, Grid} from 'antd';
import './Homepage.css';
import { motion } from 'framer-motion';
import Reviews from "../components/Reviews";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import ServicesGallery from "../components/ServicesGallery";

const { Content} = Layout;
const Homepage = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const styles = {
        heroContainer: {
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#d2b6a2',
            textAlign: 'center',
            backgroundColor: 'transparent',
            zIndex: 3,
            position: 'relative',
        },
        heroContent: {
            zIndex: 3,
            // position: 'absolute',
            display: 'flex',
            // marginTop: '70px',
            // marginLeft: '350px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d2b6a2',
            padding: '20px',
            // maxWidth: '700px',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            animation: 'fadeIn 2s ease-out',
        },
        heading: {
            fontSize: '2rem',
            fontWeight: 'none',
            marginBottom: '15px',
            fontFamily: 'Playwrite RO, cursive',
        },
        subheading: {
            fontSize: '1.2rem',
            marginBottom: '20px',
            fontFamily: 'Segoe UI',
            textAlign: 'center'
        },
        ctaButton: {
            padding: '10px 20px',
            backgroundColor: '#d2b6a2',
            color: '#000000',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'Roboto Mono',
            alignItems: 'center'
        },
    }

    const carouselItems = ['/image6_l.jpg', '/image2_l.jpg', '/image10_l.jpg'];

    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader/>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
            >
                <iframe
                    src="https://player.vimeo.com/video/1045287269?controls=0&title=0&byline=0&portrait=0&autopause=0"
                    height="600"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{
                        width: '100vw',
                        height: '670px',
                        border: 'none',
                        display: 'block',
                        objectFit: 'cover',
                        margin: '0',
                        padding: '0',
                        zIndex: 1,
                        position: 'relative',
                        marginTop: '-140px',
                        // overlay: 'rgba(0, 0, 0, 0.3)',
                    }}>
                </iframe>
                <svg
                    viewBox="0 0 2000 100"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: 'absolute',
                        bottom: -30,
                        left: 0,
                        width: '100%',
                        height: '80px',
                        zIndex: 3,
                    }}
                >
                    {/* Horizontal line */}
                    <line x1="0" y1="50" x2="2000" y2="50" stroke="#d2b6a2" strokeWidth="1.5" />

                    {/* Interlocking rings */}
                    <circle cx="1015" cy="50" r="32" fill="none" stroke="#d2b6a2" strokeWidth="2.5" />
                    <circle cx="1047" cy="50" r="32" fill="none" stroke="#d2b6a2" strokeWidth="2.5" style={{ mixBlendMode: 'multiply' }} />

                    {/* Left floral swirl - enhanced */}
                    <path d="M980 50 C960 10, 940 90, 920 50" fill="none" stroke="#d2b6a2" strokeWidth="1.6" />
                    <circle cx="950" cy="50" r="3" fill="#d2b6a2" />
                    <circle cx="945" cy="40" r="2.5" fill="#d2b6a2" />
                    <circle cx="940" cy="60" r="2.2" fill="#d2b6a2" />
                    <path d="M955 48 C953 43, 957 43, 955 48" fill="#d2b6a2" />
                    <path d="M948 52 C946 47, 950 47, 948 52" fill="#d2b6a2" />

                    {/* Right floral swirl - enhanced */}
                    <path d="M1080 50 C1100 10, 1120 90, 1140 50" fill="none" stroke="#d2b6a2" strokeWidth="1.6" />
                    <circle cx="1110" cy="50" r="3" fill="#d2b6a2" />
                    <circle cx="1115" cy="40" r="2.5" fill="#d2b6a2" />
                    <circle cx="1120" cy="60" r="2.2" fill="#d2b6a2" />
                    <path d="M1105 48 C1103 43, 1107 43, 1105 48" fill="#d2b6a2" />
                    <path d="M1112 52 C1110 47, 1114 47, 1112 52" fill="#d2b6a2" />
                </svg>
            </motion.div>
            <Content style={{ padding: '0 48px', background: 'transparent', marginTop: '50px' }}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heading}>Povestea voastra prin obiectivul meu</h1>
                    <p style={styles.subheading}>O fotografie nu este doar o imagine, ci o emoție oprită în timp.
                        Ne dorim să simțiți iar și iar acea bucurie, emoție și căldură de la nunta voastră,
                        prin fiecare fotografie și film realizat cu pasiune și atenție la detalii.</p>
                </div>

                <div
                    style={{
                        background: 'transparent',
                        minHeight: 280,
                        padding: 15,
                        borderRadius: borderRadiusLG,
                        color: 'white',
                        marginTop: '100px'
                    }}
                >
                    <Carousel
                        className="custom-carousel"
                        autoplay
                        speed={3000}
                        effect="fade"
                        dots={true}
                        easing="ease-in-out"
                    >
                        {carouselItems.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`carousel-item-${index}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center', // aligns both top
                    gap: '40px',
                    marginTop: '50px',
                }}>

                    {/* Image Overlap Block */}
                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <img
                            src="/image4_p.jpg"
                            alt="Main"
                            style={{
                                display: 'block',
                                width: '300px',
                                height: 'auto',
                            }}
                        />
                        <img
                            src="/image7_p.jpg"
                            alt="Overlay"
                            style={{
                                position: 'absolute',
                                bottom: '-100px',
                                right: '-200px',
                                width: '250px',
                                height: 'auto',
                            }}
                        />
                    </div>

                    {/* Text and CTA Block */}
                    <div style={{ maxWidth: '800px', width:'100%' }}>
                        <h1 style={{
                            fontFamily: 'Playwrite RO, cursive',
                            color: '#d2b6a2',
                            textAlign: 'center',
                            marginBottom: '20px'
                        }}>
                            Magia Momentelor Unice
                        </h1>
                        <p style={{
                            ...styles.subheading,
                            textAlign: 'center',
                            marginBottom: '20px'
                        }}>
                            Fiecare zâmbet, fiecare lacrimă de fericire,
                            fiecare privire plină de emoție merită să fie păstrată pentru totdeauna.
                            Cu atenție și dragoste, capturăm acele clipe unice din ziua voastră specială,
                            pentru ca peste ani să vă puteți întoarce în timp și să retrăiți fiecare sentiment.
                            Fiecare zâmbet, fiecare lacrimă de fericire,
                            fiecare privire plină de emoție merită să fie păstrată pentru totdeauna.
                            Cu atenție și dragoste, capturăm acele clipe unice din ziua voastră specială,
                            pentru ca peste ani să vă puteți întoarce în timp și să retrăiți fiecare sentiment.
                            Fiecare zâmbet, fiecare lacrimă de fericire,
                            fiecare privire plină de emoție merită să fie păstrată pentru totdeauna.
                            Cu atenție și dragoste, capturăm acele clipe unice din ziua voastră specială,
                            pentru ca peste ani să vă puteți întoarce în timp și să retrăiți fiecare sentiment.
                        </p>
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button style={styles.ctaButton}>
                                Mai multe povesti
                            </button>
                        </div>
                    </div>

                </div>

                <motion.div initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                    <ServicesGallery/>
                </motion.div>

                <div style={{ marginTop: '80px' }}>
                    <Reviews />
                </div>
            </Content>

            <CustomFooter/>
        </Layout>
    );
};

export default Homepage;
