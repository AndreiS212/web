import React from 'react';
import { Row, Col } from 'antd';
import './ServicesGallery.css'

const photos = [
    { src: '/image5_p.jpg', text: 'Cununii' },
    { src: '/image11_p.jpg', text: 'Nunti' },
    { src: '/image9_p.jpg', text: 'Botezuri' },
];

const ServicesGallery = () => {
    return (
        <Row gutter={[16, 16]}>
            {photos.map((photo, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                <div className="image-container">
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
