import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Flex, Splitter, Typography } from 'antd';
import './Homepage.css';
import { Link } from 'react-router-dom';  // Import from react-router-dom

const { Header, Content, Footer } = Layout;

const items = ['Despre mine', 'Testimoniale', 'Contact'].map(key => ({
    key,
    label: (
        <Link to={
            key === 'Testimoniale' ? '/reviews' :
                key === 'Contact' ? '/contact' :
                    key === 'Despre mine' ? '/about' :
                        '/'
        }>
            {key}
        </Link>
    ),
}));

const Desc = props => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap', color: 'white'}}>
            {props.text}
        </Typography.Title>
    </Flex>
);

const Homepage = () => {
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
                    <Splitter className="custom-splitter" style={{height: 500, boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
                        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                            <iframe
                                src="https://player.vimeo.com/video/1048483085?controls=0&title=0&byline=0&portrait=0&autopause=0"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                style={{
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                }}
                            ></iframe>
                        </Splitter.Panel>
                        <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center', color: 'white', padding: '20px', fontFamily: 'Arial'}}>
                                <p>Roxana x Dragos - Wedd Short Movie</p>
                                <p>Shoot with Panasonic Lumix S5 IIX</p>
                                <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                                <p>Color grading: Rec 709 and my custom luts</p>
                            </div>
                        </Splitter.Panel>
                    </Splitter>
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', background: '#000', color: 'white' }}>
                AnDi Design ©{new Date().getFullYear()} Created by Andrei Sigartau
            </Footer>
        </Layout>
    );
};

export default Homepage;
