import React, { useRef } from 'react';
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
    const grouped = groupReviews(reviews);

    return (
        <div className="reviews-container">
            <div className="carousel-wrapper">
                <LeftOutlined
                    className="carousel-arrow left"
                    onClick={() => carouselRef.current?.prev()}
                />
                <Carousel
                    autoplay
                    dots
                    ref={carouselRef}
                    className="reviews-carousel"
                >
                    {grouped.map((pair, i) => (
                        <div key={i}>
                            <div className="review-slide">
                                {pair.map((review, idx) => (
                                    <Card className="review-card" key={idx}>
                                        <div className="quote-icon">“</div>
                                        <p className="review-text">"{review.content}"</p>
                                        <div className="review-author">– {review.name}</div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
                <RightOutlined
                    className="carousel-arrow right"
                    onClick={() => carouselRef.current?.next()}
                />
            </div>
        </div>
    );
};

export default Reviews;
