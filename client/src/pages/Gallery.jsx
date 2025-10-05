import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Anchor, Button } from "antd";
import { motion } from "framer-motion";
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import "./Gallery.css";
import DecoratedTitle from "../components/DecoratedTitle";
import ScrollToHashElement from "../components/ScrollToHashElement";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const VerticalLine = ({ isMobile }) => (
    <svg
        width={isMobile ? "0" : "24"}         // smaller width on mobile
        height={isMobile ? "0" : "80"}       // shorter height
        viewBox="0 0 24 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "0 auto" }}
    >
        <line
            x1={isMobile ? "6" : "12"}       // center line on mobile
            y1="0"
            x2={isMobile ? "6" : "12"}
            y2={isMobile ? "40" : "80"}
            stroke="#d2b6a2"
            strokeWidth="1"
        />
    </svg>
);

const NamesWithDecoration = ({ names, locationText = "- Locatie -", eveniment, isMobile }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                textAlign: "center",
                padding: isMobile ? "2px 0" : "5px 0", // smaller padding
                fontFamily: "Playfair Display",
                textTransform: "uppercase",
                marginBottom: isMobile ? '80px' : '0px',
                marginTop: isMobile ? '30px' : '0px'
            }}
        >
            <VerticalLine isMobile={isMobile} />
            <p
                className="names"
                style={{
                    margin: isMobile ? "2px 0 1px" : "5px 0 3px", // smaller margins
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 500,
                }}
            >
                {names}
            </p>
            <p style={{ fontSize: isMobile ? "10px" : "16px", margin: isMobile ? "1px 0" : "3px 0" }}>
                {locationText}
            </p>
            <Button
                style={{
                    padding: isMobile ? "4px 10px" : "8px 20px",
                    fontSize: isMobile ? "0.7rem" : "0.9rem",
                    borderRadius: isMobile ? "16px" : "25px",
                    marginTop: "4px",
                    marginBottom: isMobile ? "2px" : "4px",
                }}
                onClick={() => navigate(eveniment)}
            >
                Povestea lor
            </Button>
            <VerticalLine isMobile={isMobile} />
        </div>
    );
};

const VideoSectionRow = ({ videoId, thumbnailSrc, names, locationText, eveniment, reverse = false }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row", // <-- column on mobile
                marginBottom: isMobile ? "0.5rem" : "1.5rem",
                marginTop: isMobile ? "90px" : "0px",
                gap: isMobile ? "4px" : "10px",
            }}
        >
            <div
                style={{
                    width: isMobile ? "100%" : "70%",
                    flexGrow: 1,
                    height: isMobile ? "150px" : "600px",
                }}
            >
                <VideoThumbnailPlayer videoId={videoId} thumbnailSrc={thumbnailSrc} />
            </div>

            <div
                style={{
                    width: isMobile ? "100%" : "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <NamesWithDecoration
                    names={names}
                    locationText={locationText}
                    eveniment={eveniment}
                    isMobile={isMobile}
                />
            </div>
        </div>
    );
};

const Gallery = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sections = [
        {
            id: "cununii",
            title: "Cununii",
            align: 'left',
            reverse: false,
            videos: [
                {
                    videoId: "1087340348",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg',
                    names: "Roxana & Remus",
                    locationText: "Locatie",
                    eveniment: '/CununieRoxanaRemus'
                },
            ],
        },
        {
            id: "nunti",
            title: "Nunti",
            align: "right",
            reverse: true,
            videos: [
                {
                    videoId: "1045287269",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-3_nczvvm.jpg',
                    names: "Roxana & Dragos",
                    locationText: "Locatie",
                    eveniment: '/NuntaRoxanaDragos'
                },
                {
                    videoId: "1095230919",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg',
                    names: "Andreea & Alin",
                    locationText: "Locatie",
                    eveniment: '/NuntaAndreeaAlin'
                },
                {
                    videoId: "1045290053",
                    thumbnailSrc: null,
                    names: "Gabriela & Andrei",
                    locationText: "Locatie",
                    eveniment: '/NuntaGabrielaAndrei'
                },
                {
                    videoId: "1103046588",
                    thumbnailSrc: null,
                    names: "Nicoleta & Marius",
                    locationText: "Locatie",
                    eveniment: '/NuntaNicoletaMarius'
                },
                {
                    videoId: "1103040938",
                    thumbnailSrc: null,
                    names: "Cristina & Alin",
                    locationText: "Locatie",
                    eveniment: '/NuntaCristinaAlin'
                },
                {
                    videoId: "1048483085",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-3_wu7vq8.jpg',
                    names: "Claudia & Dragos",
                    locationText: "Locatie",
                    eveniment: '/NuntaClaudiaDragos'
                },
                {
                    videoId: "1111732497",
                    thumbnailSrc: null,
                    names: "Adnana & Alin",
                    locationText: "Locatie",
                    eveniment: '/NuntaAdnanaAlin'
                },
                {
                    videoId: "1116309542",
                    thumbnailSrc: null,
                    names: "Teodora & Teodor",
                    locationText: "Locatie",
                    eveniment: '/NuntaTeodoraTeodor'
                },
            ],
        },
        {
            id: "lovestory",
            title: "Love Story",
            align: "left",
            reverse: false,
            videos: [
                {
                    videoId: "1097881705",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262035/lovestory1-9_yenlsw.jpg',
                    names: "Gabriela & Andrei",
                    locationText: "Locatie",
                    eveniment: '/LoveStoryGabrielaAndrei'
                },
            ],
        },
        {
            id: "botezuri",
            title: "Botezuri",
            align: "right",
            reverse: true,
            videos: [
                {
                    videoId: "https://vimeo.com/1088465244",
                    thumbnailSrc: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/botez1-5.jpg',
                    names: "Vlad",
                    locationText: "Locatie",
                    eveniment: '/BotezVlad'
                },
            ],
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh", background: "black" }}>
            <CustomHeader />
            <ScrollToHashElement />
            <Content style={{ marginTop: "30px", padding: isMobile ? "0 10px" : "0 48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: "relative" }}
                >
                    <img
                        src="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory-1-17_zqsrzs.jpg"
                        alt="header"
                        style={{
                            width: '95.9vw',
                            height: '640px',
                            objectFit: 'cover',
                            marginTop: '-150px',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    />
                </motion.div>

                <Row gutter={16}>
                    {!isMobile && (
                        <Col flex="200px">
                            <Anchor
                                className="custom-anchor"
                                offsetTop={100}
                                style={{ position: "sticky", top: 100, marginTop: "100px" }}
                                affix={false}
                                items={sections.map(({ id, title }) => ({
                                    key: id,
                                    href: `#${id}`,
                                    title: title.toUpperCase(),
                                }))}
                            />

                        </Col>
                    )}
                    <Col flex="auto">
                        {/* Mobile Anchor at top */}
                        {isMobile && (
                            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                                <Anchor
                                    className="custom-anchor"
                                    affix={false}
                                    items={sections.map(({ id, title }) => ({
                                        key: id,
                                        href: `#${id}`,
                                        title: title.toUpperCase(),
                                    }))}
                                />
                            </div>
                        )}
                        {sections.map(({ id, title, align, reverse, videos }) => (
                            <div id={id} key={id} style={{ marginBottom: "3rem" }}>
                                <DecoratedTitle text={title} align={align} />
                                {videos.map(({ videoId, thumbnailSrc, names, locationText, eveniment }, idx) => (
                                    <VideoSectionRow
                                        key={videoId + idx}
                                        videoId={videoId}
                                        thumbnailSrc={thumbnailSrc}
                                        names={names}
                                        locationText={locationText}
                                        eveniment={eveniment}
                                        reverse={reverse}
                                    />
                                ))}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default Gallery;
