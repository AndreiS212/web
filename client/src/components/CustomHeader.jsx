import React, {useEffect, useState} from "react";
import { Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import { MenuOutlined } from "@ant-design/icons";
import './CustomHeader.css';

const CustomHeader = () => {
    const leftItems = ["Acasa", "Povestea mea", "Film"];
    const rightItems = ["Cadre", "Servicii", "Contact"];
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateItems = (keys) =>
        keys.map((key) => ({
            key,
            label: (
                <Link
                    to={
                        key === "Film"
                            ? "/gallery"
                            : key === "Cadre"
                                ? "/cadre"
                                : key === "Contact"
                                    ? "/contact"
                                    : key === "Povestea mea"
                                        ? "/about"
                                        : key === "Servicii"
                                            ? "/services"
                                            : key === "Login"
                                                ? "/admin"
                                                : "/"
                    }
                >
                    {key}
                </Link>
            ),
        }));

    return (
        <Header
            style={{
                background: "transparent",
                padding: "0 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 10,
            }}
        >
            {/* Hamburger for mobile */}
            <Button
                type="text"
                onClick={() => setDrawerVisible(true)}
                style={{ display: "none", fontSize: "24px", color: "#d2b6a2" }}
                className="mobile-menu-button"
            >
                <MenuOutlined />
            </Button>

            {/* Left menu */}
            <Menu
                theme="dark"
                mode="horizontal"
                items={generateItems(leftItems)}
                style={{
                    background: "transparent",
                    borderBottom: "none",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    flex: 1,
                    justifyContent: "flex-end",
                    display: "flex",
                }}
                className="desktop-menu"
            />

            {/* Logo */}
            <Link
                to="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isMobile ? "center" : "flex-start",
                    flex: isMobile ? 1 : "unset",
                    margin: isMobile ? "0 auto" : "0 20px",
                }}
            >
                <img
                    src={isMobile
                        ? "https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262024/logogold_v630lh.png"
                        : "https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262027/lfgold_v6zjbg.png"}
                    alt="Logo"
                    style={{
                        height: isMobile ? "60px" : "100px", // larger on mobile
                        width: "auto",
                        cursor: "pointer",
                        marginTop: isMobile ? "30px" : '0px'
                    }}
                />
            </Link>


            {/* Right menu */}
            <Menu
                theme="dark"
                mode="horizontal"
                items={generateItems(rightItems)}
                style={{
                    background: "transparent",
                    borderBottom: "none",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start",
                }}
                className="desktop-menu"
            />

            {/* Drawer for mobile */}
            <Drawer
                title={
                    <Link to="/" onClick={() => setDrawerVisible(false)}>
                        <img
                            src="https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262024/logogold_v630lh.png"
                            alt="Logo"
                            style={{ height: "60px", width: "auto" }}
                        />
                    </Link>
                }
                placement="left"
                closable
                closeIcon={<span style={{ color: "#d2b6a2", fontSize: "24px" }}>x</span>}
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                bodyStyle={{ padding: 0, backgroundColor: "#000000" }}
                headerStyle={{ backgroundColor: "#000000", borderBottom: "none" }}
            >
                <Menu
                    mode="inline"
                    theme="dark" // dark theme to make background black
                    items={[...leftItems, ...rightItems].map((key) => ({
                        key,
                        label: (
                            <Link
                                to={
                                    key === "Film"
                                        ? "/gallery"
                                        : key === "Cadre"
                                            ? "/cadre"
                                            : key === "Contact"
                                                ? "/contact"
                                                : key === "Povestea mea"
                                                    ? "/about"
                                                    : key === "Servicii"
                                                        ? "/services"
                                                        : key === "Login"
                                                            ? "/admin"
                                                            : "/"
                                }
                                onClick={() => setDrawerVisible(false)}
                                style={{ color: "#d2b6a2" }}
                            >
                                {key}
                            </Link>
                        ),
                    }))}
                    style={{ borderRight: "none", backgroundColor: "#000000" }}
                />

            </Drawer>

            {/* Responsive CSS */}
            <style>
                {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-button {
              display: inline-block !important;
            }
          }
        `}
            </style>
        </Header>
    );
};

export default CustomHeader;
