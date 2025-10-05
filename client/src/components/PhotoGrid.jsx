import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Modal } from 'antd';

const AnimatedImage = ({ src, idx, onClick }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={`img-${idx}`}
            onClick={() => onClick(src)}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 1.2,
                ease: 'easeOut',
                delay: idx * 0.1,
            }}
            style={{
                width: '100%',
                borderRadius: 8,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'block',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
            }}
            whileHover={{ scale: 1.03 }}
        />
    );
};

const PhotoGrid = ({ photos, columns }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClose = () => setSelectedPhoto(null);

    return (
        <>
            <div
                style={{
                    columns: isMobile ? 1 : columns,
                    columnGap: '16px',
                    padding: '0 20px',
                }}
            >
                {photos.map((src, idx) => (
                    <div key={idx} style={{ breakInside: 'avoid', marginBottom: '16px' }}>
                        <AnimatedImage src={src} idx={idx} onClick={setSelectedPhoto} />
                    </div>
                ))}
            </div>

            <Modal
                open={!!selectedPhoto}
                footer={null}
                onCancel={handleClose}
                centered
                width="90vw"
                bodyStyle={{
                    backgroundColor: 'black',
                    textAlign: 'center',
                    padding: 0,
                }}
                closeIcon={<span style={{ color: '#d2b6a2', fontSize: '24px' }}>×</span>}
            >
                {selectedPhoto && (
                    <img
                        src={selectedPhoto}
                        alt="selected"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                        }}
                    />
                )}
            </Modal>
        </>
    );
};

export default PhotoGrid;
