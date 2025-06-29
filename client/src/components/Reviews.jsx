import React, {useState} from 'react';
import {Layout, Card, Rate, Button, Input, Typography, Avatar, Space, Menu, Carousel} from 'antd';
import {Link} from 'react-router-dom';
import {Header} from "antd/es/layout/layout";

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
];

const Reviews = () => {
    return (
        <div style={{maxWidth: '700px', margin: '0 auto', padding: '60px 20px', marginTop: '100px'}}>
            <Carousel autoplay dotPosition="bottom">
                {reviews.map((review, index) => (
                    <div key={index}>
                        <Card
                            style={{
                                margin: '0 auto',
                                textAlign: 'center',
                                padding: '40px 30px',
                                borderRadius: 20,
                                border: '1px solid #d2b6a2',
                                backgroundColor: 'black',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }}
                        >
                            <p style={{
                                fontStyle: 'italic',
                                fontSize: '1.1rem',
                                marginBottom: 20
                            }}>"{review.content}"</p>
                            <strong style={{color: '#a78b71'}}>– {review.name}</strong>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;
