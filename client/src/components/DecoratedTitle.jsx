// components/DecoratedTitle.js
import React from 'react';

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
    if (align === 'left') {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '60px 0 30px',
                gap: '10px',
            }}>
                {/* small line BEFORE the text */}
                <div style={smallLineStyle} />
                <span style={{
                    fontSize: '1.8rem',
                    fontFamily: 'Playfair Display SC, serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: '#d2b6a2',
                    whiteSpace: 'nowrap'
                }}>{text}</span>
                <div style={{ flex: 1, height: '1px', ...lineStyle }} />
            </div>
        );
    } else if (align === 'right') {
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
                    fontSize: '1.8rem',
                    fontFamily: 'Playfair Display SC, serif',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    color: '#d2b6a2',
                    whiteSpace: 'nowrap'
                }}>{text}</span>
                {/* small line AFTER the text */}
                <div style={smallLineStyle} />
            </div>
        );
    } else {
        // center (default) - equal fixed width lines left and right
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
                    fontSize: '1.8rem',
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
