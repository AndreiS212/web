import React from 'react';
import {Layout, Form, Input, Button, Typography, Space, Menu} from 'antd';
import { Link } from 'react-router-dom';  // For navigation
import './Homepage.css';  // You can reuse the Homepage CSS for the same styling

const { Content, Header, Footer } = Layout;
const { Title, Text } = Typography;

const Contact = () => {
    return (
        <Layout style={{ minHeight: '100vh', background: '#f7e7e7' }}>
            <Header style={{ display: 'flex', alignItems: 'center', background: '#f7e7e7', justifyContent: 'space-between' }}>
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
                            label: <Link to="/contact">Contact</Link>,
                        },
                    ]}
                    style={{ flex: 1, minWidth: 0, background: '#f7e7e7' }}
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

            <Content style={{ padding: '0 48px', background: '#f7e7e7', marginTop: '60px' }}>
                <div
                    style={{
                        background: '#f7e7e7',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: 8,
                        color: 'white',
                    }}
                >
                    <Title level={2} style={{ color: 'white' }}>Contact Us</Title>
                    <Text style={{ color: 'white', fontSize: '16px' }}>
                        We would love to hear from you! Please reach out for any inquiries.
                    </Text>

                    <Form
                        name="contact-form"
                        layout="vertical"
                        style={{ marginTop: '20px' }}
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            label="Your Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            labelStyle={{ color: 'white' }}  // Inline style to make the label text white
                        >
                            <Input placeholder="Enter your name" style={{ backgroundColor: 'black', color: 'white' }} />
                        </Form.Item>

                        <Form.Item
                            label="Your Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Your Message"
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', background: '#000', color: 'white' }}>
                AnDi Design ©{new Date().getFullYear()} Created by Andrei Sigartau
            </Footer>
        </Layout>
    );
};

export default Contact;
