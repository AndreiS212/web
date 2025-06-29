import React from 'react';
import {Row, Col, Card, Modal, Layout, Menu, Splitter} from 'antd';
import {useState} from 'react';
import {Link} from "react-router-dom";
import {Content, Header, Footer} from "antd/es/layout/layout";
import VideoThumbnailPlayer from "../components/VideoThumbnailPlayer";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import PhotoGrid from "../components/PhotoGrid";

const Gallery = () => {
    return (
        <Layout style={{minHeight: '100vh', background: 'black'}}>
            <CustomHeader/>
            <Content style={{
                marginTop: "30px"
            }}>
                <VideoThumbnailPlayer
                    style={{width: "1520px", height: "800px", position: "center", marginTop: '-150px'}}
                    videoId="1087340348"
                />
                <Splitter className="custom-splitter" style={{height: 500, background: 'transparent'}}>
                    <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingRight: '20px' }}>
                        <VideoThumbnailPlayer videoId="1048483085" />
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
                    </Splitter.Panel>
                </Splitter>

                {/*<PhotoGrid*/}
                {/*    photos={['/image14_p.jpg', '/image13_p.jpg', '/image8_l.jpg', '/image10_l.jpg', '/image9_p.jpg', '/image6_l.jpg']}*/}
                {/*    columns={3}*/}
                {/*/>*/}

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
                    </Splitter.Panel>
                    <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingLeft: '20px' }}>
                        <VideoThumbnailPlayer videoId="1045287269"/>
                    </Splitter.Panel>
                </Splitter>

                {/*<PhotoGrid*/}
                {/*    photos={['/image14_p.jpg', '/image12_p.jpg', '/image8_l.jpg', '/image2.jpg', '/image6_l.jpg', '/image14_p.jpg']}*/}
                {/*    columns={3}*/}
                {/*/>*/}

                <Splitter className="custom-splitter" style={{height: 500}}>
                    <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingRight: '20px' }}>
                        <VideoThumbnailPlayer videoId="1045290053"/>
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
                    </Splitter.Panel>
                </Splitter>

                <Splitter className="custom-splitter" style={{height: 500}}>
                    <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI', textTransform: "uppercase"}}>
                            <p className="names">
                                Roxana & Remus
                            </p>
                            <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
                                <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
                            </svg>
                            <p style={{ fontSize: '20px'}}>- Wedd Short Movie -</p>
                            <p>Shoot with Panasonic Lumix S5 IIX</p>
                            <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                            <p>Color grading: My custom luts</p>
                        </div>
                    </Splitter.Panel>
                    <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingLeft: '20px' }}>
                        <VideoThumbnailPlayer videoId="1087340348"/>
                    </Splitter.Panel>
                </Splitter>

                <Splitter className="custom-splitter" style={{height: 500}}>
                    <Splitter.Panel defaultSize="60%" min="20%" max="70%" style={{ paddingRight: '20px' }}>
                        <VideoThumbnailPlayer videoId="1095230919"/>
                    </Splitter.Panel>
                    <Splitter.Panel defaultSize="40%" min="20%" max="70%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI', textTransform: "uppercase"}}>
                            <p className="names">
                                Andreea & Alin
                            </p>
                            <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ margin: '16px auto' }}>
                                <path d="M0 10 Q25 0, 50 10 T100 10" stroke="#d2b6a2" strokeWidth="2" fill="none" />
                            </svg>
                            <p style={{ fontSize: '20px'}}>- Wedd Short Movie -</p>
                            <p>Shoot with Panasonic Lumix S5 IIX</p>
                            <p>Lens: Panasonic LUMIX S 35mm f/1.8</p>
                            <p>Color grading: Rec 709 and my custom luts</p>
                        </div>
                    </Splitter.Panel>
                </Splitter>
            </Content>
            <CustomFooter/>
        </Layout>
    );
};

export default Gallery;
