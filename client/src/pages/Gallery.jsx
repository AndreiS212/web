import React from "react";
import { Row, Col, Layout, Anchor, Splitter } from "antd";
import { motion } from "framer-motion";
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import "./Gallery.css";
import PhotoGrid from "../components/PhotoGrid";
import DecoratedTitle from "../components/DecoratedTitle";

const { Content } = Layout;

// const WavyLine = () => (
//     <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
//         <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
//     </svg>
// );

const VerticalLineWithCircle = () => (
    <svg
        width="24"
        height="80"
        viewBox="0 0 24 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "0 auto" }}
    >
        <line x1="12" y1="0" x2="12" y2="80" stroke="#d2b6a2" strokeWidth="2" />
    </svg>
);

const NamesWithDecoration = ({ names, locationText = "- Locatie -" }) => (
    <div
        style={{
            textAlign: "center",
            padding: "20px",
            fontFamily: "Playfair Display",
            textTransform: "uppercase",
            marginRight: "60px"
        }}
    >
        <VerticalLineWithCircle />
        <p className="names" style={{ margin: "20px 0 10px" }}>
            {names}
        </p>
        <p style={{ fontSize: "20px" }}>{locationText}</p>
        <VerticalLineWithCircle />
    </div>
);

const VideoSectionRow = ({
                             videoId,
                             thumbnailSrc,
                             names,
                             locationText,
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
                <NamesWithDecoration names={names} locationText={locationText} />
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
                    thumbnailSrc: "/cununie1.jpg",
                    names: "Claudia & Dragos",
                    locationText: "Locatie",
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
                    thumbnailSrc: "/nunta-3-3.jpg",
                    names: "Roxana & Dragos",
                    locationText: "Locatie",
                },
                {
                    videoId: "1095230919",
                    thumbnailSrc: "/nunta-1-8.jpg",
                    names: "Andreea & Alin",
                    locationText: "Locatie",
                },
                {
                    videoId: "1045290053",
                    thumbnailSrc: null,
                    names: "Gabriela & Andrei",
                    locationText: "Locatie",
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
                    thumbnailSrc: "/lovestory1-9.jpg",
                    names: "Gabriela & Andrei",
                    locationText: "Locatie",
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
                    thumbnailSrc: "/botez1-5.jpg",
                    names: "Vlad",
                    locationText: "Locatie",
                },
            ],
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh", background: "black" }}>
            <CustomHeader />
            <Content style={{ marginTop: "30px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <img src='/lovestory-1-17.jpg' alt='header' style={{
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
                                {videos.map(({ videoId, thumbnailSrc, names, locationText }, idx) => (
                                    <VideoSectionRow
                                        key={videoId + idx}
                                        videoId={videoId}
                                        thumbnailSrc={thumbnailSrc}
                                        names={names}
                                        locationText={locationText}
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
