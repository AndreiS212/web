import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";

const { Content } = Layout;

const PrivacyPolicy = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Layout style={{ background: "#000", minHeight: "100vh" }}>
            <CustomHeader />

            <Content
                style={{
                    padding: isMobile ? "60px 20px" : "100px 180px",
                    color: "#e5dfd8",
                    fontFamily: "'Roboto Mono', monospace",
                    lineHeight: 1.9,
                    fontSize: isMobile ? "14px" : "15.5px",
                }}
            >
                <h1
                    style={{
                        color: "#d2b6a2",
                        textAlign: "center",
                        marginBottom: "50px",
                        textTransform: "uppercase",
                        fontSize: isMobile ? "20px" : "28px",
                        letterSpacing: "1.5px",
                    }}
                >
                    Politica de Confidențialitate
                </h1>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>1. Informații generale</h2>
                    <p>
                        Luca’s Frames respectă confidențialitatea vizitatorilor și clienților săi.
                        Această pagină explică ce date colectăm, de ce și cum sunt utilizate.
                    </p>
                </section>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>2. Colectarea datelor</h2>
                    <p>
                        Site-ul nostru nu folosește cookie-uri de urmărire sau analiză.
                        Colectăm doar informațiile pe care ni le furnizați voluntar prin
                        formularul de contact: nume, adresă de e-mail și cont de social media,
                        pentru a vă putea răspunde la cererea trimisă.
                    </p>
                </section>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>3. Utilizarea datelor</h2>
                    <p>
                        Datele colectate sunt folosite exclusiv pentru comunicarea directă cu dumneavoastră,
                        în scopul oferirii de informații despre serviciile noastre sau stabilirii unei colaborări.
                        Nu partajăm aceste informații cu terți.
                    </p>
                </section>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>4. Conținut de la terți</h2>
                    <p>
                        Site-ul conține videoclipuri încorporate de pe platforma Vimeo.
                        Vimeo poate colecta date anonime despre interacțiunea utilizatorilor
                        cu videoclipurile (de exemplu, dacă un clip a fost redat).
                        Pentru mai multe informații, vă recomandăm să consultați{" "}
                        <a
                            href="https://vimeo.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#d2b6a2", textDecoration: "underline" }}
                        >
                            Politica de confidențialitate Vimeo
                        </a>.
                    </p>
                </section>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>5. Păstrarea datelor</h2>
                    <p>
                        Informațiile transmise prin formular sunt păstrate doar pe durata necesară
                        pentru a răspunde solicitării dumneavoastră. După finalizarea comunicării,
                        datele pot fi șterse la cererea expresă a utilizatorului.
                    </p>
                </section>

                <section style={{ marginBottom: "50px" }}>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>6. Drepturile dumneavoastră</h2>
                    <p>
                        Conform legislației GDPR, aveți dreptul de a solicita accesul, corectarea sau ștergerea
                        datelor personale. Pentru orice solicitare legată de protecția datelor, ne puteți contacta la{" "}
                        <a
                            href="mailto:lucasframes.storyteller@gmail.com"
                            style={{ color: "#d2b6a2", textDecoration: "underline" }}
                        >
                            lucasframes.storyteller@gmail.com
                        </a>.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: "#d2b6a2", fontSize: isMobile ? "16px" : "18px" }}>7. Actualizări</h2>
                    <p>
                        Această politică poate fi actualizată periodic. Orice modificare va fi publicată pe această pagină.
                        Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}.
                    </p>
                </section>
            </Content>

            <CustomFooter />
        </Layout>
    );
};

export default PrivacyPolicy;
