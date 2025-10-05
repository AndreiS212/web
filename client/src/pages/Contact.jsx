import React, { useState } from 'react';
import { Layout, Form, Input, Button, Space, Row, Col, message, Spin } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import DecoratedTitle from '../components/DecoratedTitle';

const { Content } = Layout;

const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #d2b6a2',
    borderRadius: 0,
    color: '#d2b6a2',
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '1rem',
};

const labelStyle = {
    color: '#d2b6a2',
    fontWeight: '500',
    fontFamily: 'Playfair Display',
    fontSize: '15px',
};

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();

            if (data.success) {
                message.success("Mesajul a fost trimis cu succes!");
                form.resetFields();
            } else {
                message.error("A apărut o eroare la trimiterea mesajului.");
            }
        } catch (error) {
            console.error(error);
            message.error("Eroare la trimiterea mesajului.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
            >
                <img
                    src="/nunta3-8.jpg"
                    alt="homeheader"
                    style={{
                        width: '99vw',
                        height: '640px',
                        objectFit: 'cover',
                        marginTop: '-150px',
                        position: 'relative',
                        zIndex: 1,
                    }}
                />
            </motion.div>

            <DecoratedTitle text="Ia legătura cu mine" align="left" />
            <Content
                style={{
                    padding: '3rem 1.5rem',
                    width: "80%",
                    maxWidth: '99vw',
                    margin: 'auto',
                    marginTop: "-20px",
                    color: '#d2b6a2',
                }}
            >
                <Row gutter={[64, 48]} justify="center" align="top">
                    {/* Contact Form */}
                    <Col xs={24} md={12} style={{ paddingLeft: 0, marginLeft: '30px' }}>
                        <Form
                            layout="vertical"
                            style={{ marginTop: 24 }}
                            form={form}
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                label={<span style={labelStyle}>Nume</span>}
                                name="name"
                                rules={[{ required: true, message: 'Numele nu este valid' }]}
                            >
                                <Input placeholder="Prenumele și numele tău"
                                       style={{
                                           ...inputStyle,
                                           '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                       }} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Email</span>}
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Adresa de email nu este validă' }]}
                            >
                                <Input placeholder="email@exemplu.com"
                                       style={{
                                        ...inputStyle,
                                        '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                }} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Telefon</span>}
                                name="phone"
                                rules={[{ required: true, message: 'Numărul de telefon nu este valid' }]}
                            >
                                <Input
                                    placeholder="+40..."
                                    style={{
                                    ...inputStyle,
                                    '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Locatia evenimentului</span>}
                                name="location"
                                rules={[{ required: true, message: 'Locatia este un camp obligatoriu' }]}
                            >
                                <Input placeholder="Ex: Bucuresti"
                                       style={{
                                           ...inputStyle,
                                           '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                       }} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Cum ai aflat de mine?</span>}
                                name="referral">
                                <Input placeholder="Ex: recomandare, Instagram, Google"
                                       style={{
                                           ...inputStyle,
                                           '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                       }} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Social media handle</span>}
                                name="socialMedia">
                                <Input placeholder="Ex: @lucasframes"
                                       style={{
                                           ...inputStyle,
                                           '::placeholder': { color: '#d2b6a2', opacity: 0.7 },
                                       }} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={labelStyle}>Mesaj</span>}
                                name="message"
                                rules={[{ required: true, message: 'Mesajul nu este valid' }]}
                            >
                                <Input.TextArea
                                    rows={4}
                                    placeholder="Spune-ne cum te putem ajuta"
                                    style={{
                                        ...inputStyle,
                                        borderBottom: '1px solid #d2b6a2',
                                        resize: 'vertical',
                                        '::placeholder': { color: '#d2b6a2', opacity: 0.7 }
                                    }}
                                />
                            </Form.Item>

                            <Form.Item style={{ textAlign: 'center', marginTop: 32 }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{
                                        backgroundColor: '#d2b6a2',
                                        border: 'none',
                                        color: 'black',
                                        fontWeight: '600',
                                        padding: '10px 40px',
                                        borderRadius: 6,
                                        boxShadow: 'none',
                                        fontFamily: "Playfair Display SC"
                                    }}
                                    disabled={loading}
                                >
                                    {loading ? <Spin size="small" /> : "Trimite mesajul"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>

                    {/* Contact Info */}
                    <Col xs={24} md={10} style={{ paddingRight: 0, marginRight: '30px', marginTop: "100px" }}>
                        <div style={{ textAlign: 'center', paddingRight: 24 }}>
                            <DecoratedTitle text="Detalii de contact" align="center" />
                        </div>

                        <Space
                            direction="vertical"
                            size="large"
                            style={{
                                marginTop: 24,
                                width: '100%',
                                fontSize: '1.1rem',
                                color: '#d2b6a2',
                                textAlign: 'center',
                                fontFamily: "Playfair Display"
                            }}
                        >
                            {[{
                                icon: <MailOutlined style={{ fontSize: 20 }} />,
                                text: 'contact@videodenunta.ro',
                            }, {
                                icon: <PhoneOutlined style={{ fontSize: 20 }} />,
                                text: '+40 712 345 678',
                            }, {
                                icon: <EnvironmentOutlined style={{ fontSize: 20 }} />,
                                text: 'București, România',
                            }].map(({ icon, text }, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                                    {icon}
                                    <span>{text}</span>
                                </div>
                            ))}
                        </Space>
                    </Col>
                </Row>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default Contact;
