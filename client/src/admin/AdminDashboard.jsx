import React, {useState} from 'react';
import {Layout, Menu, theme, Splitter, Carousel} from 'antd';
import '../pages/Homepage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import EditButton from "../components/EditButton"

const { Header, Content, Footer } = Layout;

const AdminDashboard = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const items = [
        ...['Despre noi', 'Testimoniale', 'Contact', 'Login'].map(key => ({
            key,
            label: (
                <Link to={
                    key === 'Testimoniale' ? '/reviews' :
                        key === 'Contact' ? '/contact' :
                            key === 'Despre noi' ? '/about' :
                                key === 'Login' ? '/admin' :
                                    '/'
                }>
                    {key}
                </Link>
            ),
        }))
    ];


    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <Header style={{ display: 'flex', alignItems: 'center', background: 'transparent', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', height: '100px' }}>
                    <Link to="/">
                        <img
                            src="/image0.png"
                            alt="Logo"
                            style={{ width: '500px', height: '100px', cursor: 'pointer', zIndex: 10 , position: 'relative' }}
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
                        zIndex: 10 ,
                        position: 'relative'
                    }}
                    className="custom-menu"
                />
            </Header>
            {/*<VideoThumbnailPlayer*/}
            {/*    style={{width: "1400px", height: "600px", position: "center"}}*/}
            {/*    videoId="1045287269"*/}
            {/*    // overlayText={"Claudia & Dragos"}*/}
            {/*/>*/}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div style={{ position: 'relative', width: '100vw', height: '680px', marginTop: '110px' }}>
                    <iframe
                        src="https://player.vimeo.com/video/1045287269?controls=0&title=0&byline=0&portrait=0&autopause=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            display: 'block',
                            objectFit: 'cover',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    ></iframe>
                    <EditButton />
                </div>
            </motion.div>

            <Content style={{ padding: '0 48px', background: 'transparent', marginTop: '50px'}}>
                <div
                    style={{
                        background: 'transparent',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        color: 'white',
                    }}
                >
                    <Splitter className="custom-splitter" style={{height: 500, background: 'transparent'}}>
                        <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingRight: '20px' }}>
                            <VideoThumbnailPlayer videoId="1048483085" />
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                        <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI', textTransform: "uppercase"}}>
                                <p className="names">
                                    Claudia & Dragos
                                </p>
                                <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
                                    <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
                                </svg>
                                <p style={{ fontSize: '20px'}}>- Wedd Short Movie -</p>
                                <p>Shoot with Panasonic Lumix S5 IIX</p>
                                <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                                <p>Color grading: Rec 709 and my custom luts</p>
                            </div>
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                    </Splitter>

                    <Splitter className="custom-splitter" style={{height: 500}}>
                        <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI', textTransform: "uppercase"}}>
                                <p className="names">
                                    Roxana & Dragos
                                </p>
                                <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
                                    <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
                                </svg>
                                <p style={{ fontSize: '20px'}}>- Wedd Short Movie -</p>
                                <p>Shoot with Panasonic Lumix S5 IIX</p>
                                <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                                <p>Color grading: Rec 709 and my custom luts</p>
                            </div>
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                        <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingLeft: '20px' }}>
                            <VideoThumbnailPlayer videoId="1045287269"/>
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                    </Splitter>
                    <Splitter className="custom-splitter" style={{height: 500}}>
                        <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingRight: '20px' }}>
                            <VideoThumbnailPlayer videoId="1045290053"/>
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                        <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI', textTransform: "uppercase"}}>
                                <p className="names">
                                    Gabriela & Andrei
                                </p>
                                <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
                                    <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
                                </svg>
                                <p style={{ fontSize: '20px'}}>- Wedd Short Movie -</p>
                                <p>Shoot with Panasonic Lumix S5 IIX</p>
                                <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                                <p>Color grading: Rec 709 and my custom luts</p>
                            </div>
                            {/*<EditButton/>*/}
                        </Splitter.Panel>
                    </Splitter>
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
                    <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                        <strong>AnDi Design</strong> ©{new Date().getFullYear()} - Created by Andrei Sigartau
                    </p>
                    <div style={{ marginBottom: '20px' }}>
                        <Link to="/privacy-policy" style={{ color: '#d2b6a2', marginRight: '15px' }}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms" style={{ color: '#d2b6a2', marginRight: '15px' }}>
                            Terms of Service
                        </Link>
                        <Link to="/contact" style={{ color: '#d2b6a2' }}>
                            Contact
                        </Link>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook" style={{ color: '#d2b6a2', marginRight: '20px', fontSize: '18px' }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" style={{ color: '#d2b6a2', marginRight: '20px', fontSize: '18px' }} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" style={{ color: '#d2b6a2', fontSize: '18px' }} />
                        </a>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};

export default AdminDashboard;
