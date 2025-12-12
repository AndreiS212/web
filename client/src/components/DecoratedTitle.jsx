// components/DecoratedTitle.js
import React, { useState, useEffect } from 'react';

const lineStyle = {
    height: '1px',
    backgroundColor: '#d2b6a2',
    opacity: 0.5,
};

const smallLineStyle = {
    ...lineStyle,
    width: '200px',
};

const fixedLineStyle = {
    ...lineStyle,
    width: '200px',
};

const DecoratedTitle = ({ text, align = 'center' }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const effectiveAlign = isMobile ? 'center' : align;

    if (effectiveAlign === 'left') {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '60px 0 30px',
                gap: '10px',
            }}>
                <div style={smallLineStyle} />
                <span style={{
                    fontSize: isMobile ? '1rem' : '1.8rem',
                    fontFamily: 'Playfair Display SC, serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: '#d2b6a2',
                    whiteSpace: 'nowrap'
                }}>{text}</span>
                <div style={{ flex: 1, height: '1px', ...lineStyle }} />
            </div>
        );
    } else if (effectiveAlign === 'right') {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                margin: '60px 0 30px',
                gap: '10px',
            }}>
                <div style={{ flex: 1, height: '1px', ...lineStyle }} />
                <span style={{
                    fontSize: isMobile ? '1rem' : '1.8rem',
                    fontFamily: 'Playfair Display SC, serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: '#d2b6a2',
                    whiteSpace: 'nowrap'
                }}>{text}</span>
                <div style={smallLineStyle} />
            </div>
        );
    } else {
        // center (default)
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '60px 0 30px',
                gap: '20px',
            }}>
                <div style={fixedLineStyle} />
                <span style={{
                    fontSize: isMobile ? '1.4rem' : '1.8rem',
                    fontFamily: 'Playfair Display SC, serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: '#d2b6a2',
                    whiteSpace: 'nowrap'
                }}>{text}</span>
                <div style={fixedLineStyle} />
            </div>
        );
    }
};

export default DecoratedTitle;
