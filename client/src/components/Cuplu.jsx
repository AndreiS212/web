import React, { useState } from 'react';
import { Layout, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import DecoratedTitle from "../components/DecoratedTitle";
import VideoThumbnailPlayer from "./VideoThumbnailPlayer";

const { Content } = Layout;

const Cuplu = ({ name, header, videoId, photos, thumbnail }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const smallGridPhotos = photos.slice(0, 6);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev === 0 ? smallGridPhotos.length - 1 : prev - 1));
    };

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev === smallGridPhotos.length - 1 ? 0 : prev + 1));
    };

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
                {/* Full-width Video */}
                <div style={{ width: '100%', marginBottom: '60px' }}>
                    <p style={{
                        fontSize: '30px',
                        fontFamily: 'Playfair Display SC',
                        color: "#d2b6a2",
                        marginBottom: '20px'
                    }}>
                        Filmul Complet
                    </p>
                    <div style={{
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        aspectRatio: '16 / 9',
                        overflow: 'hidden',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                    }}>
                        <VideoThumbnailPlayer videoId={videoId} thumbnailSrc={thumbnail} />
                    </div>
                </div>

                {/* Text + Small Photo Grid Section */}
                <div style={{
                    display: 'flex',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                }}>
                    {/* Text panel */}
                    <div style={{
                        flex: '1 1 300px',
                        color: '#d2b6a2',
                        fontFamily: 'Playfair Display',
                        fontSize: '18px',
                        lineHeight: '1.6',
                        textAlign: 'left',
                    }}>
                        <p>
                            Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului sau alte detalii speciale pe care vrei să le evidențiezi.
                            Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului
                            sau alte detalii speciale pe care vrei să le evidențiezi. Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului
                            sau alte detalii speciale pe care vrei să le evidențiezi.Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului
                            sau alte detalii speciale pe care vrei să le evidențiezi.Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului
                            sau alte detalii speciale pe care vrei să le evidențiezi.Aici poți adăuga câteva cuvinte despre ziua nunții, povestea cuplului
                            sau alte detalii speciale pe care vrei să le evidențiezi.
                        </p>
                    </div>

                    {/* Small photo grid */}
                    <div style={{
                        flex: '1 1 300px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px',
                    }}>
                        {smallGridPhotos.map((photo, idx) => (
                            <img
                                key={idx}
                                src={photo}
                                alt={`small-grid-${idx}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={() => openModal(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                <Modal
                    visible={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    footer={null}
                    centered
                    width="80%"
                    bodyStyle={{ padding: 0, backgroundColor: '#121212' }}
                    closeIcon={<span style={{ color: '#d2b6a2', fontSize: '24px' }}>×</span>}
                >
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <img
                            src={smallGridPhotos[currentIndex]}
                            alt={`lightbox-${currentIndex}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />

                        {/* Arrows */}
                        <LeftOutlined
                            onClick={prevPhoto}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                fontSize: '32px',
                                color: '#d2b6a2',
                                cursor: 'pointer',
                                userSelect: 'none',
                            }}
                        />
                        <RightOutlined
                            onClick={nextPhoto}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                fontSize: '32px',
                                color: '#d2b6a2',
                                cursor: 'pointer',
                                userSelect: 'none',
                            }}
                        />
                    </div>
                </Modal>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Cuplu;
