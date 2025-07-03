import React from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import './ServicesGallery.css';

const photos = [
    { src: '/cununie1.jpg', text: 'Cununii', link: '/gallery#cununii' },
    { src: '/nunta3-6.jpg', text: 'Nunti', link: '/gallery#nunti' },
    { src: '/lovestory-1-17.jpg', text: 'Love Story', link: '/gallery#lovestory' },
    { src: '/img.png', text: 'Botezuri', link: '/gallery#botezuri' },
];

const ServicesGallery = () => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    };

    return (
        <Row gutter={[16, 16]}>
            {photos.map((photo, index) => (
                <Col key={index} xs={24} sm={12} md={6}>
                    <div
                        className="image-container"
                        onClick={() => handleClick(photo.link)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={photo.src}
                            alt={`panel-${index}`}
                            className="gallery-image"
                        />
                        <div className="overlay">
                            {photo.text}
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default ServicesGallery;
