import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

const CustomHeader = () => {
    const leftItems = ['Acasa', 'Povestea mea', 'Galerie'];
    const rightItems = ['Servicii', 'Contact', 'Login'];

    const generateItems = (keys) =>
        keys.map(key => ({
            key,
            label: (
                <Link to={
                    key === 'Galerie' ? '/gallery' :
                        key === 'Contact' ? '/contact' :
                            key === 'Povestea mea' ? '/about' :
                                key === 'Servicii' ? '/services' :
                                    key === 'Login' ? '/admin' :
                                        '/'
                }>
                    {key}
                </Link>
            ),
        }));

    return (
        <Header
            style={{
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Keep all three elements in a row
                padding: '0 40px',
                height: 'auto',
                zIndex: 10,
            }}
        >
            {/* Left menu */}
            <Menu
                theme="dark"
                mode="horizontal"
                items={generateItems(leftItems)}
                style={{
                    background: 'transparent',
                    borderBottom: 'none',
                    fontFamily: 'Roboto Mono',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    flex: 1, // allows it to grow/shrink
                    justifyContent: 'flex-end', // optional
                    display: 'flex',
                }}
            />

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '0 20px' }}>
                <img
                    src="/lfgold.png"
                    alt="Logo"
                    style={{
                        height: '150px', // smaller to make it sit higher
                        width: '200px',
                        cursor: 'pointer',
                        marginTop: '-20px', // raises the logo a bit
                    }}
                />
            </Link>

            {/* Right menu */}
            <Menu
                theme="dark"
                mode="horizontal"
                items={generateItems(rightItems)}
                style={{
                    background: 'transparent',
                    borderBottom: 'none',
                    fontFamily: 'Roboto Mono',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    flex: 1,
                    display: 'flex',
                }}
            />
        </Header>
    );
};

export default CustomHeader;
