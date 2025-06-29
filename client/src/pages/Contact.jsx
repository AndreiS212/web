import React from 'react';
import { Layout, Form, Input, Button, Typography, Space, Card, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';

const { Content } = Layout;
const { Title } = Typography;

const Contact = () => {
    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader />

            <Content style={{ padding: '4rem 2rem', marginTop: '100px' }}>
                <Row gutter={[32, 32]} justify="center">
                    {/* Contact Form */}
                    <Col xs={24} md={12}>
                        <Card
                            title={
                                <Title level={3} style={{ color: '#d2b6a2', marginBottom: 0 }}>
                                    Ia legătura cu mine
                                </Title>
                            }
                            style={{
                                backgroundColor: 'transparent',
                                borderRadius: 16,
                                border: '1px solid #d2b6a2',
                            }}
                        >
                            <Form layout="vertical">
                                <Form.Item
                                    label={<span style={{ color: '#d2b6a2' }}>Nume</span>}
                                    name="name"
                                    rules={[{ required: true, message: 'Numele nu este valid' }]}
                                >
                                    <Input
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
                                    <Input
                                        placeholder="email@exemplu.com"
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderColor: '#d2b6a2',
                                            color: '#d2b6a2',
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<span style={{ color: '#d2b6a2' }}>Telefon</span>}
                                    name="phone"
                                    rules={[{ required: true, message: 'Numărul de telefon nu este valid' }]}
                                >
                                    <Input
                                        placeholder="+40..."
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderColor: '#d2b6a2',
                                            color: '#d2b6a2',
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<span style={{ color: '#d2b6a2' }}>Cum ai aflat de mine?</span>}
                                    name="referral"
                                >
                                    <Input
                                        placeholder="Ex: recomandare, Instagram, Google"
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
                                    rules={[{ required: true, message: 'Mesajul nu este valid' }]}
                                >
                                    <Input.TextArea
                                        rows={4}
                                        placeholder="Spune-ne cum te putem ajuta"
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderColor: '#d2b6a2',
                                            color: '#d2b6a2',
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{
                                            backgroundColor: '#d2b6a2',
                                            border: 'none',
                                            color: 'black',
                                            padding: '8px 30px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Trimite mesajul
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    {/* Contact Info */}
                    <Col xs={24} md={10}>
                        <Card
                            title={
                                <Title level={3} style={{ color: '#d2b6a2', marginBottom: 0 }}>
                                    Detalii de contact
                                </Title>
                            }
                            style={{
                                backgroundColor: 'transparent',
                                borderRadius: 16,
                                border: '1px solid #d2b6a2',
                            }}
                        >
                            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                                <p style={{ color: '#d2b6a2', fontSize: '1.1rem' }}>
                                    <MailOutlined style={{ marginRight: 8 }} />
                                    contact@videodenunta.ro
                                </p>
                                <p style={{ color: '#d2b6a2', fontSize: '1.1rem' }}>
                                    <PhoneOutlined style={{ marginRight: 8 }} />
                                    +40 712 345 678
                                </p>
                                <p style={{ color: '#d2b6a2', fontSize: '1.1rem' }}>
                                    <EnvironmentOutlined style={{ marginRight: 8 }} />
                                    București, România
                                </p>
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Contact;
