import React, { useState } from 'react';
import { Layout, Tooltip } from 'antd';
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import { EyeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Services = () => {
    const [visibleOverlay, setVisibleOverlay] = useState(null);

    const toggleOverlay = (index) => {
        setVisibleOverlay(prev => prev === index ? null : index);
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // center horizontally when stacked
        gap: '20px',
        margin: '30px 10px',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexWrap: 'nowrap',
        flexDirection: 'column', // stack vertically
        transition: 'all 0.5s ease',  // <-- here’s the transition
    };

    const textBlockStyle = {
        flex: 1,
        backgroundColor: 'black',
        color: '#d2b6a2',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        padding: '15px',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '10px',
        lineHeight: '1.6',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        position: 'relative',
    };

    const imageContainerStyle = {
        flex: 1,
        minWidth: '280px',
        maxWidth: '100%',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
    };

    const imageStyle = {
        width: '50%',
        height: 'auto',
        borderRadius: '10px',
    };

    const packageTitleStyle = {
        fontFamily: "Playwrite RO, cursive",
        color: '#d2b6a2',
        marginTop: '10px',
        fontSize: '20px',
    };

    const assistantDescriptionStyle = {
        marginTop: '8px',
        fontSize: '13px',
        color: '#ccc',
        fontStyle: 'italic',
        lineHeight: '1.4',
    };

    const separatorStyle = {
        border: 'none',
        borderTop: '1px solid rgba(210, 182, 162, 0.2)',
        margin: '20px auto',
        maxWidth: '800px',
    };

    const extraServicesStyle = {
        maxWidth: '500px',
        margin: '40px auto 80px auto',
        padding: '20px',
        backgroundColor: '#d2b6a2',
        borderRadius: '10px',
        color: 'black',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '13px',
        lineHeight: '1.6',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        textAlign: 'center',          // center text horizontally
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',     // center text vertically
        alignItems: 'center',
        gap: '10px',
    };

    const tickList = (items) => (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {items.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
          <span style={{
              position: 'absolute',
              left: 0,
              color: '#4c3a2d',
              fontWeight: 'bold',
          }}>✓</span>{item}
                </li>
            ))}
        </ul>
    );

    // Component for each package with overlay and eye icon
    const Package = ({ index, imgSrc, imgAlt, title, description, details }) => {
        const isVisible = visibleOverlay === index;

        return (
            <div
                style={{ ...imageContainerStyle, position: 'relative', width: '50%', margin: '30px auto', cursor: 'pointer' }}
                onClick={() => toggleOverlay(index)}
            >
                <div style={{ position: 'relative', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                    {/* Image */}
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            display: 'block',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: isVisible ? 0 : 1,
                            position: 'relative',
                            zIndex: 0,
                            userSelect: 'none',
                        }}
                        draggable={false}
                    />

                    {/* Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            color: '#d2b6a2',
                            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                            borderRadius: '10px',
                            boxSizing: 'border-box',
                            opacity: isVisible ? 1 : 0,
                            pointerEvents: isVisible ? 'auto' : 'none',
                            transition: 'opacity 0.5s ease-in-out',
                            zIndex: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '20px',
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '14px', marginBottom: '10px' }}>Detalii pachet:</h3>
                            {tickList(details)}
                        </div>
                    </div>

                    {/* Eye icon always rendered, fade in/out */}
                    <Tooltip title="Click pentru detalii">
                        <EyeOutlined
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '32px',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                borderRadius: '50%',
                                padding: '10px',
                                cursor: 'pointer',
                                zIndex: 3,
                                opacity: isVisible ? 0 : 1,
                                transition: 'opacity 0.5s ease-in-out',
                                pointerEvents: isVisible ? 'none' : 'auto',
                                userSelect: 'none',
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // prevent event bubbling to container div
                                toggleOverlay(index);
                            }}
                        />
                    </Tooltip>
                </div>

                <h2 style={{ ...packageTitleStyle, textAlign: 'center' }}>{title}</h2>
                {description && <p style={{ ...assistantDescriptionStyle, textAlign: 'center' }}>{description}</p>}
            </div>
        );
    };

    return (
        <Layout style={{ minHeight: '100vh', background: 'black' }}>
            <CustomHeader />
            <Content>

                {/* Packages container */}
                <div style={containerStyle}>

                    <Package
                        index={1}
                        imgSrc="/image8_l.jpg"
                        imgAlt="Pachet 1"
                        title="Pachetul 1 - 800 RON"
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
                        imgSrc="/image6_l.jpg"
                        imgAlt="Pachet 2"
                        title="Pachetul 2 - 1200 RON"
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
                        imgSrc="/image8_l.jpg"
                        imgAlt="Pachet 3"
                        title="Pachetul 3 - 1600 RON"
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
                </div>

                {/* Extra services */}
                <div style={extraServicesStyle}>
                    <h2
                        style={{
                            marginBottom: '16px',
                            fontFamily: 'Playwrite RO, cursive',
                            color: '#7a5d4e',
                            fontSize: '18px',
                        }}
                    >
                        Servicii suplimentare
                    </h2>
                    {tickList([
                        '1 videograf: €400',
                        '1 asistent: €100',
                        'Dronă: €200',
                        'Macara cinematografică: €600',
                        'Ședință video TTD: €400',
                    ])}
                </div>

            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default Services;
