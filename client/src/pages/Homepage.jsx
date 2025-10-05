import React, {useEffect, useMemo, useRef, useState} from 'react';
import { Layout, Carousel } from 'antd';
import './Homepage.css';
import { motion } from 'framer-motion';
import Reviews from "../components/Reviews";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import ServicesGallery from "../components/ServicesGallery";
import { useInView } from 'react-intersection-observer';
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import DecoratedTitle from "../components/DecoratedTitle";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Homepage = () => {
    const { ref, inView } = useInView();
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const carouselItems = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/lovestory1-19.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-5_sd0kny.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262036/lovestory1-10_t6rux6.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta3-7_cjijci.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-4_cevogz.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-9_hc85kp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-12_rwycep.jpg'
    ];


    const videoItems = [
        '1097881705',
        // '1103040938',
        // '1103046588',
        // '1095230919',
        // '1088465244',
        // '1087340348',
        // '1048483085',
        // '1045290053',
        // '1045287269'
    ]

    const randomVideoId = useMemo(() => {
        const index = Math.floor(Math.random() * videoItems.length);
        return videoItems[index];
    }, []);

    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader />

            {/* Hero Video */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                ref={ref}
            >
                <iframe
                    src={`https://player.vimeo.com/video/${randomVideoId}?controls=0&title=0&byline=0&portrait=0&autopause=0&autoplay=1&&muted=1`}
                    height="600"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{
                        width: '99vw',
                        height: '670px',
                        border: 'none',
                        objectFit: 'cover',
                        marginTop: isMobile ? '-220px' : '-150px',
                    }}
                />
                {/* Black overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: isMobile ? '36%' : '100%',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        pointerEvents: 'none',
                        zIndex: 2,
                    }}
                />
                <svg
                    viewBox="0 0 2000 100"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: 'absolute',
                        bottom: 83,
                        left: 0,
                        width: '100%',
                        height: isMobile ? '803px' : '80px',
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
                <div style={{
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d2b6a2',
                    padding: '20px',
                    textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                    animation: 'fadeIn 2s ease-out'
                }}>
                    <h1 style={{
                        fontSize: '1.5rem',
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        marginTop: isMobile ? '-300px' : '0',
                        fontFamily: 'Playfair Display SC, serif',
                        fontWeight: 700,
                        color: '#d2b6a2',
                        textAlign: 'center'
                    }}>Povestea voastră prin obiectivul meu</h1>
                    <p style={{
                        fontSize: '1.15rem',
                        lineHeight: '1.7',
                        maxWidth: '800px',
                        fontFamily: 'Segoe UI, sans-serif',
                        textAlign: 'center',
                        color: '#e0d8d2',
                        width: isMobile ? '400px' : '800px'
                    }}>
                        O fotografie nu este doar o imagine, ci o emoție oprită în timp.
                        Ne dorim să simțiți iar și iar acea bucurie, emoție și căldură de la nunta voastră,
                        prin fiecare fotografie și film realizat cu pasiune și atenție la detalii.
                    </p>
                </div>

                {/* Carousel */}
                <DecoratedTitle text="Galerie" align="left" />
                <div style={{ position: 'relative', width: '100%', marginBottom: '3rem' }}>
                    <Carousel
                        ref={carouselRef}
                        autoplay
                        dots
                        style={{
                            width: isMobile ? '400px' : '1430px',
                            marginLeft: isMobile ? '-40px' : '0'
                        }}
                    >
                        {carouselItems.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`carousel-item-${index}`}
                                    style={{
                                        width: isMobile ? '150%' : '100%',
                                        height: isMobile ? '200%' : 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                    </Carousel>
                    <LeftOutlined
                        onClick={() => carouselRef.current.prev()}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            fontSize: '24px',
                            color: 'white',
                            cursor: 'pointer',
                            marginLeft: isMobile ? '-40px' : '0',
                            transform: 'translateY(-50%)',
                        }}
                    />
                    <RightOutlined
                        onClick={() => carouselRef.current.next()}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            fontSize: '24px',
                            color: 'white',
                            cursor: 'pointer',
                            marginRight: isMobile ? '-40px' : '0',
                            transform: 'translateY(-50%)',
                        }}
                    />
                </div>

                {/* Services */}
                <DecoratedTitle text="Evenimente" align='right' />
                <ServicesGallery />

                {/* Stories */}
                <DecoratedTitle text="Povești recente" align="left" />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center',
                    marginTop: isMobile ? '100px' : '0px'
                }}>
                    {[
                        { videoId: "1116309542", names: "Teodora & Teodor", type: "Nuntă" },
                        { videoId: "1111732497", names: "Adnana & Alin", type: "Nuntă" }
                    ].map((story, idx) => {
                        return (
                            <div
                                key={idx}
                                style={{
                                    width: isMobile ? '600px' : '600px',
                                    maxWidth: '600px',
                                    textAlign: 'center',
                                    height: isMobile ? '150px' : '400px',
                                    marginBottom: isMobile ? '10rem' : '0',
                                }}
                            >
                                <VideoThumbnailPlayer videoId={story.videoId} thumbnailSrc="" />
                                <p style={{
                                    marginTop: isMobile ? '6px' : '10px',
                                    fontSize: isMobile ? '16px' : '18px',
                                    fontFamily: 'Playfair Display SC',
                                    color: "#d2b6a2"
                                }}>
                                    {story.names}
                                </p>
                                <p style={{
                                    fontSize: isMobile ? '13px' : '15px',
                                    fontFamily: 'Playfair Display SC'
                                }}>
                                    {story.type}
                                </p>
                            </div>
                        );
                    })}
                </div>


                {/* Reviews */}
                <DecoratedTitle text="Recenzii" align="right" />
                <Reviews />
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Homepage;
