import React, { useEffect, useState } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Row gutter={[16, 16]}>
            {photos.map((photo, index) => (
                <Col key={index} xs={24} sm={12} md={6}>
                    <a
                        href={photo.link}
                        className="image-container"
                        style={{
                            cursor: 'pointer',
                            display: 'block',
                            // height: isMobile ? '500px' : '800px',
                            // width: isMobile ? '370px' : '340px',
                            // marginLeft: isMobile ? '-30px' : '0'
                        }}
                    >
                        <img
                            src={photo.src}
                            alt={`panel-${index}`}
                            className="gallery-image"
                            style={{
                                width: '100%',
                                height: isMobile ? '300px' : '80%',
                                objectFit: 'cover',
                            }}
                        />
                        <div
                            className="overlay"
                            style={{
                                fontSize: isMobile ? '0.9rem' : '1.2rem',
                                padding: isMobile ? '6px 10px' : '10px 20px',
                            }}
                        >
                            {photo.text}
                        </div>
                    </a>
                </Col>
            ))}
        </Row>
    );
};

export default ServicesGallery;
