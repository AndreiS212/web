import React, { useState } from 'react';
import {Layout, Card, Rate, Button, Input, Typography, Avatar, Space, Menu} from 'antd';
import { Link } from 'react-router-dom';  // Import from react-router-dom for routing
import './Homepage.css';  // You can reuse the Homepage CSS for the same styling

const { Content, Footer, Header } = Layout;

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([
        {
            user: 'John Doe',
            rating: 4,
            review: 'Great product! Very happy with my purchase.',
            date: '2025-04-22',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        {
            user: 'Jane Smith',
            rating: 5,
            review: 'Amazing quality and quick delivery!',
            date: '2025-04-20',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
    ]);

    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);

    const handleReviewChange = (e) => setNewReview(e.target.value);
    const handleRatingChange = (value) => setNewRating(value);

    const handleSubmitReview = () => {
        if (newReview && newRating > 0) {
            const newReviewData = {
                user: 'New User',
                rating: newRating,
                review: newReview,
                date: new Date().toISOString().split('T')[0],
                avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
            };
            setReviews([newReviewData, ...reviews]);
            setNewReview('');
            setNewRating(0);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh', background: '#000' }}>
            <Header style={{ display: 'flex', alignItems: 'center', background: '#000', justifyContent: 'space-between' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: 'Despre mine',
                            label: <Link to="/">Despre mine</Link>,
                        },
                        {
                            key: 'Testimoniale',
                            label: <Link to="/reviews">Testimoniale</Link>,
                        },
                        {
                            key: 'Contact',
                            label: <Link to="/">Contact</Link>,
                        },
                    ]}
                    style={{ flex: 1, minWidth: 0, background: '#000' }}
                />
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                    <Link to="/">
                        <img
                            src="/image0.png"
                            alt="Logo"
                            style={{ width: '300px', height: '150px', cursor: 'pointer' }}
                        />
                    </Link>
                </div>
            </Header>

            <Content style={{ padding: '0 48px', background: '#000' }}>
                <div style={{ marginTop: '60px',
                        background: '#1a1a1a',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: 8,
                        color: 'white',
                    }}>
                    <Typography.Title level={2} style={{ color: 'white' }}>
                        Customer Reviews
                    </Typography.Title>

                    <div style={{ marginBottom: '20px' }}>
                        <Input.TextArea
                            value={newReview}
                            onChange={handleReviewChange}
                            rows={4}
                            placeholder="Write your review here..."
                            style={{ marginBottom: '10px' }}
                        />
                        <Rate
                            value={newRating}
                            onChange={handleRatingChange}
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                        />
                        <Button
                            type="primary"
                            onClick={handleSubmitReview}
                            disabled={!newReview || newRating === 0}
                            style={{ marginTop: '10px' }}
                        >
                            Submit Review
                        </Button>
                    </div>

                    <div>
                        {reviews.map((review, index) => (
                            <Card key={index} style={{ marginBottom: '20px', background: '#333', borderRadius: '8px' }}>
                                <Space size="large">
                                    <Avatar src={review.avatar} />
                                    <div>
                                        <Typography.Text strong style={{ color: 'white' }}>
                                            {review.user}
                                        </Typography.Text>
                                        <Typography.Text type="secondary" style={{ color: 'white' }}>
                                            {' '} - {review.date}
                                        </Typography.Text>
                                        <Rate disabled value={review.rating} />
                                    </div>
                                </Space>
                                <p style={{ marginTop: '10px', color: 'white' }}>{review.review}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', background: '#000', color: 'white' }}>
                AnDi Design ©{new Date().getFullYear()} Created by Andrei Sigartau
            </Footer>
        </Layout>
    );
};

export default ReviewsPage;
