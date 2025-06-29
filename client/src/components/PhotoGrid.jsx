import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedImage = ({ src, idx }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={`img-${idx}`}
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
            }}
        />
    );
};

const PhotoGrid = ({ photos, columns = 3 }) => {
    return (
        <div
            style={{
                columns: columns,
                columnGap: '16px',
                padding: '0 20px',
            }}
        >
            {photos.map((src, idx) => (
                <div key={idx} style={{ breakInside: 'avoid', marginBottom: '16px' }}>
                    <AnimatedImage src={src} idx={idx} />
                </div>
            ))}
        </div>
    );
};


export default PhotoGrid;
