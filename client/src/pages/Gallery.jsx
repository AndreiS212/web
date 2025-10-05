import React from "react";
import {Row, Col, Layout, Anchor, Splitter, Button} from "antd";
import { motion } from "framer-motion";
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import "./Gallery.css";
import DecoratedTitle from "../components/DecoratedTitle";
import ScrollToHashElement from "../components/ScrollToHashElement";
import {useNavigate} from "react-router-dom";

const { Content } = Layout;
const VerticalLine = () => (
    <svg
        width="24"
        height="80"
        viewBox="0 0 24 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "0 auto" }}
    >
        <line x1="12" y1="0" x2="12" y2="80" stroke="#d2b6a2" strokeWidth="1" />
    </svg>
);

const NamesWithDecoration = ({ names, locationText = "- Locatie -", eveniment }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                fontFamily: "Playfair Display",
                textTransform: "uppercase",
                marginRight: "60px"
            }}
        >
            <VerticalLine/>
            <p className="names" style={{margin: "20px 0 10px"}}>
                {names}
            </p>
            <p style={{fontSize: "20px"}}>{locationText}</p>
            <Button style={{
                padding: '12px 28px',
                background: 'linear-gradient(to right, #d2b6a2, #e6d2c3)',
                color: '#000',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontFamily: 'Playfair Display SC, serif',
                fontWeight: 400,
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(210, 182, 162, 0.3)',
                marginBottom: '20px'
            }}
                    onClick={() => navigate(eveniment)}>
                Povestea lor
            </Button>
            <VerticalLine/>
        </div>
    );
}

const VideoSectionRow = ({
                             videoId,
                             thumbnailSrc,
                             names,
                             locationText,
                             eveniment,
                             reverse = false,
                             height = 500,
                         }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: reverse ? "row-reverse" : "row",
                height,
                marginBottom: "2rem",
                gap: "20px",
            }}
        >
            <div
                style={{
                    flexBasis: "70%",
                    flexShrink: 0,
                    padding: reverse ? "0 0 0 20px" : "0 20px 0 0",
                }}
            >
                <VideoThumbnailPlayer videoId={videoId} thumbnailSrc={thumbnailSrc} />
            </div>

            <div
                style={{
                    flexBasis: "30%",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <NamesWithDecoration names={names} locationText={locationText} eveniment={eveniment} />
            </div>
        </div>
    );
};

const Gallery = () => {
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
            <Content style={{ marginTop: "30px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <img src='https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory-1-17_zqsrzs.jpg'
                         alt='header'
                         style={{
                        width: '99vw',
                        height: '640px',
                        border: 'none',
                        display: 'block',
                        objectFit: 'cover',
                        margin: '0',
                        padding: '0',
                        zIndex: 1,
                        position: 'relative',
                        marginTop: '-160px',
                    }}/>
                </motion.div>

                <Row gutter={16}>
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
                    <Col flex="auto">
                        {sections.map(({ id, title, align, reverse, videos }) => (
                            <div id={id} key={id} style={{ marginBottom: "4rem" }}>
                                <DecoratedTitle text={title} align={align}/>
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
