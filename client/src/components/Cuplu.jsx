import React, {useEffect, useState} from 'react';
import { Layout, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import DecoratedTitle from "../components/DecoratedTitle";
import VideoThumbnailPlayer from "./VideoThumbnailPlayer";
import PhotoGrid from "./PhotoGrid";

const { Content } = Layout;

const Cuplu = ({
                   name,
                   header,
                   persoana,
                   storyVideoId,
                   fullVideoId,
                   storyThumbnail,
                   fullThumbnail,
                   photos1,
                   photos2,
                   photos3,
                   photos4,
                   photos5,
                   photos6
}) => {
    const [isMobile, setIsMobile] = useState(false);

    const getTitle = () => {
        switch(persoana) {
            case "Baiat":
                return "lui";
            case "Fata":
                return "ei";
            default:
                return "lor";
        }
    }


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Layout style={{ minHeight: '100vh', background: '#121212', color: '#f5f0e6' }}>
            <CustomHeader />

            {/* Top Banner Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
            >
                <img
                    src={header}
                    alt="header"
                    style={{
                        width: '99vw',
                        height: '640px',
                        objectFit: 'cover',
                        display: 'block',
                        marginTop: '-160px',
                    }}
                />
            </motion.div>

            <DecoratedTitle text={name} align="center" />

            <Content style={{ padding: '40px 5vw', textAlign: 'center' }}>
                {storyVideoId && (
                    <div style={{ width: '100%', marginBottom: '60px' }}>
                        <DecoratedTitle
                            text={"Povestea " + getTitle()}
                            align="right"/>
                        <div style={{
                            width: '100%',
                            maxWidth: '1200px',
                            margin: '0 auto',
                            aspectRatio: isMobile ? '1/1' : '16 / 9',
                            overflow: 'hidden',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                        }}>
                            <VideoThumbnailPlayer videoId={storyVideoId} thumbnailSrc={storyThumbnail} />
                        </div>
                    </div>
                )}

                {fullVideoId && (
                    /* Full-width Video */
                    <div style={{ width: '100%', marginBottom: '60px' }}>
                        <DecoratedTitle text="Filmul Complet" align="left"/>
                        <div style={{
                            width: '100%',
                            maxWidth: '1200px',
                            margin: '0 auto',
                            aspectRatio: isMobile ? '1/1' : '16 / 9',
                            overflow: 'hidden',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                        }}>
                            <VideoThumbnailPlayer videoId={fullVideoId} thumbnailSrc={fullThumbnail} />
                        </div>
                    </div>
                )}

                {photos1 && (<div style={{ width: '100%', marginBottom: '60px' }}>
                    <DecoratedTitle text="Cadre de Film" align="right"/>
                    <p style={{
                        color: '#d2b6a2',
                        fontSize: '1.2rem',
                        fontFamily: 'Playfair Display',
                        margin: '16px auto',
                        maxWidth: '90vw',
                        fontStyle: 'italic',
                        textAlign: 'center'
                    }}>
                        Fragmente vizuale extrase din filmele noastre, cadre ce surprind emoții autentice, momente delicate și frumusețea unei zile unice.
                    </p>
                    {photos1 && (<PhotoGrid photos={photos1} columns={2}/>)}
                    {photos2 && (<PhotoGrid photos={photos2} columns={3}/>)}
                    {photos3 && (<PhotoGrid photos={photos3} columns={1}/>)}
                    {photos4 && (<PhotoGrid photos={photos4} columns={2}/>)}
                    {photos5 && (<PhotoGrid photos={photos5} columns={3}/>)}
                    {photos6 && (<PhotoGrid photos={photos6} columns={1}/>)}
                </div>)}
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Cuplu;
