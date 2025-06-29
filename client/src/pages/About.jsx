import React from 'react';
import { Layout } from 'antd';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import { motion } from 'framer-motion';

const { Content } = Layout;

const About = () => {
    return (
        <Layout style={{ minHeight: '100vh', background: '#121212', color: '#f5f0e6' }}>
            <CustomHeader />
            <Content style={{ padding: '50px 20px', display: 'flex', justifyContent: 'center' }}>
                <section
                    style={{
                        maxWidth: 1100,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '40px',
                        fontFamily: 'Playwrite RO, cursive, Roboto Mono',
                        lineHeight: 1.6,
                        color: '#dcd7cc',
                    }}
                >
                    {/* Image container */}
                    <div
                        style={{
                            flex: '1 1 400px',
                            minWidth: 400,
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: '0 12px 24px rgba(0,0,0,0.7)',
                        }}
                    >
                        <img
                            src='/image11_p.jpg'
                            alt="Profil"
                            style={{ width: '100%', height: '100%', display: 'block' }}
                            loading="lazy"
                        />
                    </div>

                    {/* Text container */}
                    <div style={{ flex: '2 1 400px', minWidth: 280 }}>
                        <h1
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                fontWeight: 'normal',
                                fontSize: '3rem',
                                color: '#e3c9b6',
                                marginBottom: '1rem',
                            }}
                        >
                            Despre mine
                        </h1>

                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'Segoe UI' }}>
                            Sunt <strong>Luca</strong>, videograf specializat în surprinderea celor mai frumoase
                            momente din viața voastră. Povestea voastră de dragoste merită să fie redată cu emoție,
                            naturalețe și rafinament.
                        </p>

                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'Segoe UI'}}>
                            De peste <strong>[X]</strong> ani, am onoarea să fiu alături de cupluri în cea mai importantă
                            zi a lor, transformând clipele efemere în amintiri de neuitat. Stilul meu se bazează pe
                            atenția la detalii, lumina naturală și spontaneitate, pentru ca fiecare film să fie unic,
                            autentic și plin de viață.
                        </p>

                        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', fontFamily: 'Segoe UI' }}>
                            Pentru mine, fiecare nuntă este o nouă poveste ce așteaptă să fie spusă prin imagini pline
                            de suflet și eleganță.
                        </p>

                        <p
                            style={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#e3c9b6',
                            }}
                        >
                            Hai să creăm împreună amintiri ce vor dăinui o viață întreagă.
                        </p>
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button style={{
                                padding: '10px 20px',
                                backgroundColor: '#d2b6a2',
                                color: '#000000',
                                fontSize: '1rem',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'Roboto Mono',
                            }}>
                                Contact
                            </button>
                        </div>
                    </div>
                </section>
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default About;
