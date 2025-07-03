import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CustomCarousel = ({ carouselItems }) => {
    const carouselRef = useRef();

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: 'auto' }}>
            <Carousel
                ref={carouselRef}
                className="custom-carousel"
                autoplay
                speed={1000}
                effect="fade"
                dots={true}
                easing="ease-in-out"
            >
                {carouselItems.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`carousel-item-${index}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </div>
                ))}
            </Carousel>

            {/* Left arrow */}
            <LeftOutlined
                onClick={() => carouselRef.current.prev()}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',  // close to left edge
                    transform: 'translateY(-50%)',
                    fontSize: '28px',
                    color: 'white',
                    cursor: 'pointer',
                    zIndex: 10,
                    userSelect: 'none',
                    backgroundColor: 'transparent',
                    padding: 0,
                    lineHeight: 1,
                }}
            />

            {/* Right arrow */}
            <RightOutlined
                onClick={() => carouselRef.current.next()}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',  // close to right edge
                    transform: 'translateY(-50%)',
                    fontSize: '28px',
                    color: 'white',
                    cursor: 'pointer',
                    zIndex: 10,
                    userSelect: 'none',
                    backgroundColor: 'transparent',
                    padding: 0,
                    lineHeight: 1,
                }}
            />
        </div>
    );
};

export default CustomCarousel;
