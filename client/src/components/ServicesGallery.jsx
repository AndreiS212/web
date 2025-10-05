import React from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import './ServicesGallery.css';

const photos = [
    { src: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg', text: 'Cununii', link: '/gallery#cununii' },
    { src: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262054/nunta3-6_pwrjaz.jpg', text: 'Nunti', link: '/gallery#nunti' },
    { src: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory-1-17_zqsrzs.jpg', text: 'Love Story', link: '/gallery#lovestory' },
    { src: 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1759668922/img_g45hfj.png', text: 'Botezuri', link: '/gallery#botezuri' },
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
                    <a
                        href={photo.link}
                        className="image-container"
                        style={{ cursor: 'pointer', display: 'block' }}
                    >
                        <img
                            src={photo.src}
                            alt={`panel-${index}`}
                            className="gallery-image"
                        />
                        <div className="overlay">
                            {photo.text}
                        </div>
                    </a>
                </Col>
            ))}
        </Row>
    );
};

export default ServicesGallery;
