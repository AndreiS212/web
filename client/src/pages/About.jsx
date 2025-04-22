import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Flex, Splitter, Typography } from 'antd';
import './Homepage.css';
import { Link } from 'react-router-dom';  // Import from react-router-dom

const { Header, Content, Footer } = Layout;

const items = ['Despre mine', 'Testimoniale', 'Contact'].map(key => ({
    key,
    label: (
        <Link to={key === 'Testimoniale' ? '/reviews' : (key === 'Contact' ? '/contact' : '/')}>
            {key}
        </Link>  // Link to the appropriate page based on the key
    ),
}));

const Desc = props => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap', color: 'white'}}>
            {props.text}
        </Typography.Title>
    </Flex>
);

const About = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh', background: '#000' }}>
            <Header style={{ display: 'flex', alignItems: 'center', background: '#000', justifyContent: 'space-between' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
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
                <Breadcrumb style={{ margin: '16px 0', color: 'white' }}>
                    <Breadcrumb.Item style={{ color: 'white' }}>App</Breadcrumb.Item>
                </Breadcrumb>

                <div
                    style={{
                        background: '#1a1a1a',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        color: 'white',
                    }}
                >
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', background: '#000', color: 'white' }}>
                AnDi Design ©{new Date().getFullYear()} Created by Andrei Sigartau
            </Footer>
        </Layout>
    );
};

export default About;