import React from 'react';
import {Layout, Form, Input, Button, Typography, Space, Menu, Carousel, Card, Row, Col} from 'antd';
import { Link } from 'react-router-dom';  // For navigation
import './Homepage.css';
import Paragraph from "antd/es/skeleton/Paragraph";
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";  // You can reuse the Homepage CSS for the same styling

const { Content, Header, Footer } = Layout;
const { Title, Text } = Typography;

const Contact = () => {
    const items = [
        ...['Acasa', 'Povestea noastra', 'Galerie', 'Testimoniale', 'Servicii', 'Contact', 'Login'].map(key => ({
            key,
            label: (
                <Link to={
                    key === 'Galerie' ? '/gallery' :
                        key === 'Testimoniale' ? '/reviews' :
                            key === 'Contact' ? '/contact' :
                                key === 'Povestea noastra' ? '/about' :
                                    key === 'Servicii' ? '/services' :
                                        key === 'Login' ? '/admin' :
                                            '/'
                }>
                    {key}
                </Link>
            ),
        }))
    ];

    return (
        <Layout style={{minHeight: '100vh', background: 'black'}}>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                background: 'transparent',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', height: '100px'}}>
                    <Link to="/">
                        <img
                            src="/image0.png"
                            alt="Logo"
                            style={{
                                width: '500px',
                                height: '100px',
                                cursor: 'pointer',
                                zIndex: 10,
                                position: 'relative'
                            }}
                        />
                    </Link>
                </div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        background: 'transparent',
                        display: 'flex',
                        justifyContent: 'center',
                        borderBottom: 'none',
                        marginTop: '20px',
                        zIndex: 10,
                        position: 'relative',
                    }}
                    className="custom-menu"
                />

            </Header>
            <Content>
                (
                <div style={{ padding: '4rem 2rem', backgroundColor: 'transparent', marginTop: '100px' }}>
                    <Row gutter={[32, 32]} justify="center">
                        {/* Left Card: Contact Form */}
                        <Col xs={24} md={12}>
                            <Card
                                title={<Title level={3} style={{ color: '#d2b6a2'}}>Ia legătura cu noi</Title>}
                                style={{
                                    backgroundColor: 'transparent',
                                    borderRadius: '2xl',
                                    // boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    border: '0.5px solid #d2b6a2',
                                    height: '100%', // Ensures the card is the same size
                                }}
                            >
                                <Form layout="vertical">
                                    <Form.Item
                                        label={<span style={{ color: '#d2b6a2' }}>Nume</span>}
                                        name="name"
                                        rules={[{ required: true, message: 'Te rugăm să introduci numele' }]}
                                    >
                                        <Input class='custom-input'
                                            placeholder="Prenumele și numele tău"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#d2b6a2',
                                                color: '#d2b6a2',
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label={<span style={{ color: '#d2b6a2' }}>Email</span>}
                                        name="email"
                                        rules={[{ required: true, type: 'email', message: 'Adresa de email nu este validă' }]}
                                    >
                                        <Input class='custom-input'
                                            placeholder="email@exemplu.com"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#d2b6a2',
                                                color: '#d2b6a2',
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label={<span style={{ color: '#d2b6a2' }}>Mesaj</span>}
                                        name="message"
                                        rules={[{ required: true, message: 'Scrie-ne un mesaj' }]}
                                    >
                                        <Input.TextArea class='custom-input'
                                            rows={4}
                                            placeholder="Spune-ne cum te putem ajuta"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#d2b6a2',
                                                color: '#d2b6a2',
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            size="large"
                                            style={{
                                                backgroundColor: '#d2b6a2',
                                                border: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            Trimite mesajul
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>

                        {/* Right Card: Contact Info & Map */}
                        <Col xs={24} md={10}>
                            <Card
                                title={<Title level={3} style={{ color: '#d2b6a2' }}>Detalii de contact</Title>}
                                style={{
                                    backgroundColor: 'transparent',
                                    borderRadius: '2xl',
                                    border: '0.5px solid #d2b6a2',
                                    height: '100%',
                                }}
                            >
                                <Row
                                    gutter={[16, 16]}
                                    justify="center"
                                    align="middle" // Centers the content vertically and horizontally
                                    style={{ height: '100%' }}
                                >
                                    <Col span={16}>
                                        <Space direction="vertical" size="small" align="center">
                                            <p style={{ color: '#d2b6a2', textAlign: 'center' }}>
                                                <MailOutlined style={{ color: '#d2b6a2', marginRight: 8 }} />
                                                contact@videodenunta.ro
                                            </p>
                                            <p style={{ color: '#d2b6a2', textAlign: 'center' }}>
                                                <PhoneOutlined style={{ color: '#d2b6a2', marginRight: 8 }} />
                                                +40 712 345 678
                                            </p>
                                            <p style={{ color: '#d2b6a2', textAlign: 'center' }}>
                                                <EnvironmentOutlined style={{ color: '#d2b6a2', marginRight: 8 }} />
                                                București, România
                                            </p>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <div
                                            style={{
                                                height: 250,
                                                borderRadius: 12,
                                                overflow: 'hidden',
                                                width: 250,
                                                marginLeft: -80
                                            }}
                                        >
                                            <iframe
                                                title="location"
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                style={{ border: 0 }}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.344407314796!2d26.10253877631344!3d44.426767071076025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4c4e7a1b65%3A0x6d7d4ea0d1d24834!2sBucharest!5e0!3m2!1sen!2sro!4v1687025257780!5m2!1sen!2sro"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{
                textAlign: 'center',
                background: 'linear-gradient(to right, #2f2f2f, #000)',
                padding: '40px 0',
                color: '#fff',
                borderTop: '1px solid #d2b6a2',
                fontFamily: 'Segoe UI',
                fontSize: '14px',
            }}>
                <div>
                    <p style={{fontSize: '16px', marginBottom: '20px'}}>
                        <strong>AnDi Design</strong> ©{new Date().getFullYear()} - Created by Andrei Sigartau
                    </p>
                    <div style={{marginBottom: '20px'}}>
                        <Link to="/privacy-policy" style={{color: '#d2b6a2', marginRight: '15px'}}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms" style={{color: '#d2b6a2', marginRight: '15px'}}>
                            Terms of Service
                        </Link>
                        <Link to="/contact" style={{color: '#d2b6a2'}}>
                            Contact
                        </Link>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"
                               style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"
                               style={{color: '#d2b6a2', marginRight: '20px', fontSize: '18px'}}/>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" style={{color: '#d2b6a2', fontSize: '18px'}}/>
                        </a>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};

export default Contact;
