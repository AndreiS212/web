import React, {useRef, useState} from 'react';
import { Layout, theme, Carousel } from 'antd';
import './Homepage.css';
import { motion } from 'framer-motion';
import Reviews from "../components/Reviews";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import ServicesGallery from "../components/ServicesGallery";
import { useInView } from 'react-intersection-observer';
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import DecoratedTitle from "../components/DecoratedTitle";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const { Content } = Layout;

const Homepage = () => {
    const { ref, inView } = useInView();
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef();
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d2b6a2',
            padding: '20px',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            animation: 'fadeIn 2s ease-out',
        },
        heading: {
            fontSize: '2.4rem',
            textTransform: 'uppercase',
            marginBottom: '15px',
            fontFamily: 'Playfair Display SC, serif',
            fontWeight: 700,
            color: '#d2b6a2',
        },
        subheading: {
            fontSize: '1.15rem',
            lineHeight: '1.7',
            maxWidth: '800px',
            fontFamily: 'Segoe UI, sans-serif',
            textAlign: 'center',
            color: '#e0d8d2',
        },
        ctaButton: {
            padding: '12px 28px',
            background: 'linear-gradient(to right, #d2b6a2, #e6d2c3)',
            color: '#000',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontFamily: 'Playfair Display SC, serif',
            fontWeight: 600,
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 10px rgba(210, 182, 162, 0.3)',
        },
        ctaButtonHover: {
            background: 'linear-gradient(to right, #caa98f, #d9c3b3)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 14px rgba(210, 182, 162, 0.4)',
        },
        sectionTitle: (align = 'left') => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
            gap: '10px',
            margin: '60px 0 30px',
        }),
        hrLine: {
            flex: 1,
            height: '1px',
            backgroundColor: '#d2b6a2',
            opacity: 0.5,
        },
        titleText: {
            fontSize: '2rem',
            fontFamily: 'Playfair Display SC, serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#d2b6a2',
            position: 'relative',
            paddingBottom: '6px',
            marginBottom: '8px',
            whiteSpace: 'nowrap',
        },

    };

    const carouselItems = [
        '/lovestory1-19.jpg',
        '/nunta-3-5.jpg',
        '/lovestory1-10.jpg',
        '/nunta3-7.jpg',
        '/nunta3-4.jpg',
        '/nunta1-9.jpg',
        'nunta2-12.jpg'
    ];

    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
                ref={ref}
            >
                <iframe
                    src="https://player.vimeo.com/video/1097881705?controls=0&title=0&byline=0&portrait=0&autopause=0&autoplay=1"
                    height="600"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{
                        width: '99vw',
                        height: '670px',
                        border: 'none',
                        objectFit: 'cover',
                        marginTop: '-150px',
                    }}
                />
                <svg
                    viewBox="0 0 2000 100"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: 'absolute',
                        bottom: -25,
                        left: 0,
                        width: '100%',
                        height: '80px',
                        zIndex: 3,
                    }}
                >
                    <line x1="0" y1="50" x2="2000" y2="50" stroke="#d2b6a2" strokeWidth="1.5" />
                    <circle cx="1015" cy="50" r="32" fill="none" stroke="#d2b6a2" strokeWidth="2.5" />
                    <circle cx="1047" cy="50" r="32" fill="none" stroke="#d2b6a2" strokeWidth="2.5" style={{ mixBlendMode: 'multiply' }} />
                    <path d="M980 50 C960 10, 940 90, 920 50" fill="none" stroke="#d2b6a2" strokeWidth="1.6" />
                    <circle cx="950" cy="50" r="3" fill="#d2b6a2" />
                    <circle cx="945" cy="40" r="2.5" fill="#d2b6a2" />
                    <circle cx="940" cy="60" r="2.2" fill="#d2b6a2" />
                    <path d="M955 48 C953 43, 957 43, 955 48" fill="#d2b6a2" />
                    <path d="M948 52 C946 47, 950 47, 948 52" fill="#d2b6a2" />
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
                    <h1 style={styles.heading}>Povestea voastră prin obiectivul meu</h1>
                    <p style={styles.subheading}>
                        O fotografie nu este doar o imagine, ci o emoție oprită în timp.
                        Ne dorim să simțiți iar și iar acea bucurie, emoție și căldură de la nunta voastră,
                        prin fiecare fotografie și film realizat cu pasiune și atenție la detalii.
                    </p>
                </div>

                {/* Carousel Section */}
                <DecoratedTitle text="Galerie" align="left" />
                <div style={{ position: 'relative', width: '100%', maxWidth: '100vw', margin: 'auto' }}>
                {/*<button*/}
                {/*    style={isHovered ? { ...styles.ctaButton, ...styles.ctaButtonHover } : styles.ctaButton}*/}
                {/*    onMouseEnter={() => setIsHovered(true)}*/}
                {/*    onMouseLeave={() => setIsHovered(false)}*/}
                {/*>*/}
                {/*    Portofoliu*/}
                {/*</button>*/}
                <Carousel
                    ref={carouselRef}
                    className="custom-carousel"
                    autoplay
                    speed={1000}
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
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
                {/* Left arrow */}
                <LeftOutlined
                    onClick={() => carouselRef.current.prev()}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',  // close to left edge
                        transform: 'translateY(-50%)',
                        fontSize: '28px',
                        color: 'white',
                        cursor: 'pointer',
                        zIndex: 10,
                        userSelect: 'none',
                        backgroundColor: 'transparent',
                        padding: 0,
                        lineHeight: 1,
                    }}
                />

                {/* Right arrow */}
                <RightOutlined
                    onClick={() => carouselRef.current.next()}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',  // close to right edge
                        transform: 'translateY(-50%)',
                        fontSize: '28px',
                        color: 'white',
                        cursor: 'pointer',
                        zIndex: 10,
                        userSelect: 'none',
                        backgroundColor: 'transparent',
                        padding: 0,
                        lineHeight: 1,
                    }}
                />
            </div>

                {/* Services Section */}
                <DecoratedTitle text="Evenimente" align='right' />
                {/*<button*/}
                {/*    style={isHovered ? { ...styles.ctaButton, ...styles.ctaButtonHover } : styles.ctaButton}*/}
                {/*    onMouseEnter={() => setIsHovered(true)}*/}
                {/*    onMouseLeave={() => setIsHovered(false)}*/}
                {/*>*/}
                {/*    Contact*/}
                {/*</button>*/}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ServicesGallery />
                </motion.div>

                {/* Stories Section */}
                <DecoratedTitle text="Povești recente" align="left" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '60px',
                            flexWrap: 'wrap',
                            marginTop: '40px',
                            padding: '0 20px',
                        }}
                    >
                        {/* Video 1 */}
                        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', height: '400px' }}>
                            <VideoThumbnailPlayer videoId="1097881705" thumbnailSrc="/lovestory1-9.jpg" />
                            <p style={{ marginTop: '10px', fontSize: '18px', fontFamily: 'Playfair Display SC', color: "#d2b6a2" }}>
                                Gabriela & Andrei
                            </p>
                            <p style={{ fontSize: '15px', fontFamily: 'Playfair Display SC' }}>Love Story</p>
                        </div>

                        {/* Video 2 */}
                        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', height: '400px' }}>
                            <VideoThumbnailPlayer videoId="1048483085" thumbnailSrc="/nunta2-4.jpg" />
                            <p style={{ marginTop: '10px', fontSize: '18px', fontFamily: 'Playfair Display SC', color: "#d2b6a2" }}>
                                Claudia & Dragoș
                            </p>
                            <p style={{ fontSize: '15px', fontFamily: 'Playfair Display SC' }}>Nuntă</p>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Section */}
                <div style={{ marginTop: '80px' }}>
                    <DecoratedTitle text="Recenzii" align="right" />
                    <Reviews />
                </div>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Homepage;
