import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import { motion } from 'framer-motion';
import DecoratedTitle from '../components/DecoratedTitle';

const { Content } = Layout;

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '40px' : '60px',
        margin: isMobile ? '40px 20px' : '60px auto',
        maxWidth: '1000px',
    };

    const imageContainerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyle = {
        display: 'block',
        borderRadius: '10px',
        objectFit: 'cover',
    };

    const textBlockStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        lineHeight: '1.5',
    };

    const assistantDescriptionStyle = {
        marginBottom: '10px',
        fontSize: isMobile ? '14px' : '16px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: "#d2b6a2"
    };

    const tickList = (items) => (
        <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 0 }}>
            {items.map((item, i) => (
                <li
                    key={i}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '5px',
                        color: 'white',
                        fontSize: isMobile ? '13px' : '15px',
                        fontWeight: 200,
                        fontFamily: 'Roboto Mono, serif',
                    }}
                >
                    <p
                        style={{
                            color: '#d2b6a2',
                            fontSize: isMobile ? '18px' : '20px',
                            position: 'relative',
                            top: '2px',
                            margin: 0,
                        }}
                    >
                        *
                    </p>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );

    const Package = ({ index, imgSrc, imgAlt, title, align, description, details }) => {
        const isEven = index % 2 === 0;

        return (
            <div style={{ maxWidth: '1000px', margin: '40px auto', width: '100%', marginTop: isMobile ? '-50px' : '0'  }}>
                <DecoratedTitle text={title} align={align} />
                {description && <p style={assistantDescriptionStyle}>{description}</p>}

                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : isEven ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: isMobile ? '20px' : '40px',
                        marginTop: '10px',
                    }}
                >
                    <div style={{ ...imageContainerStyle, width: isMobile ? '100%' : '65%' }}>
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            style={{ ...imageStyle, width: '100%', height: isMobile ? 'auto' : 'auto' }}
                            draggable={false}
                        />
                    </div>

                    <div style={{ ...textBlockStyle, width: isMobile ? '100%' : '35%' }}>
                        {tickList(details)}
                    </div>
                </div>
            </div>
        );
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
                    src='https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-14_dkuala.jpg'
                    alt='homeheader'
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

            <Content>
                <DecoratedTitle text="Servicii" align="left" />

                <div style={containerStyle}>
                    <Package
                        index={1}
                        imgSrc="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-4_cevogz.jpg"
                        imgAlt="Pachet 1"
                        title="Pachetul 1 - €800"
                        align="right"
                        details={[
                            "1 videograf",
                            "Filmul nunții - 60 minute + teaser 3-4 minute",
                            "Editare: color grading & sound design cinematic",
                            "Livrare pe stick/HDD client",
                            "Link cloud valabil 1 an"
                        ]}
                    />

                    <Package
                        index={2}
                        imgSrc="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta2-2_qibxrj.jpg"
                        imgAlt="Pachet 2"
                        title="Pachetul 2 - €1200"
                        align="left"
                        description={"Asistentul este o a doua cameră pe care o coordonez, prezent la eveniment și filmează la indicațiile mele."}
                        details={[
                            "1 videograf + 1 asistent",
                            "Film nunta 1h30-2h + film scurt 30min + teaser",
                            "Filmări cu dronă",
                            "Editare cinematică completă",
                            "Livrare pe stick/HDD client",
                            "Link cloud valabil 2 ani",
                        ]}
                    />

                    <Package
                        index={3}
                        imgSrc="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262035/lovestory1-12_dlxmc8.jpg"
                        imgAlt="Pachet 3"
                        title="Pachetul 3 - €1600"
                        align="right"
                        description={"Doi videografi prezenți full-time. Lucrăm împreună, coordonat, pentru rezultate spectaculoase."}
                        details={[
                            "2 videografi full-time",
                            "Film nunta 1h30-2h + film scurt 45min + teaser",
                            "Filmări cu dronă",
                            "Editare completă: grading + sunet",
                            "Livrare pe stick/HDD client",
                            "Link cloud valabil 2 ani",
                            "Love story opțional (ședință înainte de nuntă)",
                        ]}
                    />

                    <Package
                        index={4}
                        imgSrc="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262017/botez1-6.jpg"
                        imgAlt="Pachet 4"
                        title="Servicii Suplimentare"
                        align="left"
                        details={[
                            '1 videograf: €400',
                            '1 asistent: €100',
                            'Dronă: €200',
                            'Macara cinematografică: €600',
                            'Ședință video TTD: €400'
                        ]}
                    />
                </div>
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default Services;
