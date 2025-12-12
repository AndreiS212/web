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
import CTAButton from "../components/CTAButton";

const { Content } = Layout;

const Homepage = () => {
    const { ref, inView } = useInView();
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const iframeRef = useRef(null);
    const [videoHeight, setVideoHeight] = useState(0);
    const videoWrapperRef = useRef(null);

    useEffect(() => {
        if (!videoWrapperRef.current) return;

        const observer = new ResizeObserver(entries => {
            const rect = entries[0].contentRect;
            setVideoHeight(rect.height);
        });

        observer.observe(videoWrapperRef.current);

        return () => observer.disconnect();
    }, []);

    const carouselItems = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262036/lovestory1-10_t6rux6.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta3-7_cjijci.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-4_cevogz.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-9_hc85kp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1759669216/nunta3-8_weqbqk.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta-3-9_ta4v9o.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-3_nczvvm.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-4_ldnfyk.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory1-16_y7fpsf.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262029/love1-5_gp9kcy.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-10_sybzec.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg',
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
                <div className="hero-container" style={{ height: videoHeight }}>
                    <div className="hero-video-wrapper" ref={videoWrapperRef}>
                        <iframe ref={iframeRef}
                            className="hero-iframe"
                            src={`https://player.vimeo.com/video/${randomVideoId}?controls=0&title=0&byline=0&portrait=0&autopause=0&autoplay=1&muted=1&dnt=1`}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>

                    {!isMobile && <div className="hero-overlay" />}
                    {!isMobile && (
                        <svg
                            className="hero-svg"
                            viewBox="0 0 2000 100"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
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
                    )}
                </div>
            </motion.div>

            <Content className="hero-text">
                <div style={{
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d2b6a2',
                    padding: '2vh 2vw',
                    textShadow: '0 0.4vh 0.6vh rgba(0, 0, 0, 0.5)',
                    animation: 'fadeIn 2s ease-out',
                    marginTop: isMobile ? '3vh' : isTablet ? '5vh' : '-8vh', // responsive
                }}>
                    <h1 style={{
                        fontSize: 'clamp(1.2rem, 2vw, 2rem)',
                        textTransform: 'uppercase',
                        marginBottom: '2vh', // responsive
                        marginTop: '-10vh',
                        fontFamily: 'Playfair Display SC, serif',
                        fontWeight: 700,
                        color: '#d2b6a2',
                        textAlign: 'center'
                    }}>Povestea voastră prin obiectivul meu</h1>

                    <p style={{
                        fontSize: 'clamp(1.0rem, 1.2vw, 1.15rem)',
                        lineHeight: 1.7,
                        maxWidth: '90%',
                        fontFamily: 'Segoe UI, sans-serif',
                        textAlign: 'center',
                        color: '#e0d8d2'
                    }}>
                        O fotografie nu este doar o imagine, ci o emoție oprită în timp.
                        Ne dorim să simțiți iar și iar acea bucurie, emoție și căldură de la nunta voastră,
                        prin fiecare fotografie și film realizat cu pasiune și atenție la detalii.
                    </p>
                    <CTAButton />
                </div>

                {/* Carousel */}
                <DecoratedTitle text="Galerie" align="left" />
                <div className="carousel-wrapper">
                    <Carousel
                        ref={carouselRef}
                        autoplay
                        dots
                    >
                        {carouselItems.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`carousel-item-${index}`}
                                    className="carousel-image"
                                />
                            </div>
                        ))}
                    </Carousel>
                    <LeftOutlined
                        className="carousel-arrow left"
                        onClick={() => carouselRef.current.prev()}
                    />
                    <RightOutlined
                        className="carousel-arrow right"
                        onClick={() => carouselRef.current.next()}
                    />
                </div>

                {/* Services */}
                <div className="services-section">
                    <DecoratedTitle text="Evenimente" align='right' />
                    <div className="services">
                        <ServicesGallery />
                    </div>
                </div>

                {/* Stories */}
                <div className="stories-section">
                    <DecoratedTitle text="Povești recente" align="left" />
                    <div className="stories-container">
                        {[
                            { videoId: "1116309542", names: "Teodora & Teodor", type: "Nuntă" },
                            { videoId: "1111732497", names: "Adnana & Alin", type: "Nuntă" }
                        ].map((story, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        width: '100%',
                                        maxWidth: '600px',
                                        textAlign: 'center',
                                        height: isMobile ? '150px' : '400px',
                                        marginBottom: isMobile ? '2rem' : '0',
                                        aspectRatio: isMobile ? '1/1' : '16/9',
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
                </div>


            {/*    /!* Reviews *!/*/}
            {/*    <DecoratedTitle text="Recenzii" align="right" />*/}
            {/*    <Reviews />*/}
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Homepage;
