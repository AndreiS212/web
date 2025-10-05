import React, {useEffect, useRef, useState} from 'react';
import { Carousel, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Reviews.css';
import DecoratedTitle from "./DecoratedTitle";

const reviews = [
    {
        name: "Ana & Mihai",
        content: "Filmul nostru de nuntă este absolut superb! Am plâns de emoție când l-am văzut. Mulțumim din suflet!",
    },
    {
        name: "Ioana & Radu",
        content: "Profesionalism și pasiune! Ați surprins perfect fiecare moment important. Ne-ați oferit o amintire de neprețuit.",
    },
    {
        name: "Andreea & Paul",
        content: "Cinematografia este de top. Suntem foarte recunoscători pentru munca voastră minunată!",
    },
    {
        name: "Diana & Alex",
        content: "Un film care ne face să retrăim toate emoțiile zilei! O echipă fantastică!",
    },
];

const groupReviews = (array, size = 2) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

const Reviews = () => {
    const carouselRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const grouped = groupReviews(reviews, isMobile ? 1 : 2);

    return (
        <div className="reviews-container">
            <div className="carousel-wrapper">
                <LeftOutlined
                    className="carousel-arrow left"
                    onClick={() => carouselRef.current?.prev()}
                    style={{marginTop: isMobile ? '-40px' : '0px'}}
                />
                <Carousel
                    autoplay
                    dots
                    ref={carouselRef}
                    style={{marginTop: '-40px'}}
                    className="reviews-carousel"
                >
                    {grouped.map((pair, i) => (
                        <div key={i}>
                            <div className="review-slide">
                                {pair.map((review, idx) => (
                                    <Card
                                        className="review-card"
                                        key={idx}
                                        style={{
                                            width: isMobile ? '90%' : '400px', // smaller on mobile
                                            margin: '0 auto 20px auto',
                                            padding: isMobile ? '12px' : '20px', // less padding on mobile
                                            fontSize: isMobile ? '0.85rem' : '1rem', // smaller text on mobile
                                        }}
                                    >
                                        <div className="quote-icon" style={{ fontSize: isMobile ? '24px' : '32px' }}>“</div>
                                        <p className="review-text" style={{ fontSize: isMobile ? '0.85rem' : '1rem' }}>
                                            "{review.content}"
                                        </p>
                                        <div className="review-author" style={{ fontSize: isMobile ? '0.8rem' : '1rem' }}>
                                            – {review.name}
                                        </div>
                                    </Card>
                                ))}

                            </div>
                        </div>
                    ))}
                </Carousel>
                <RightOutlined
                    className="carousel-arrow right"
                    onClick={() => carouselRef.current?.next()}
                    style={{marginTop: isMobile ? '-40px' : '0px'}}
                />
            </div>
        </div>
    );
};

export default Reviews;
