import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Assuming your homepage component is here
import Contact from "./pages/Contact";  // Assuming your Reviews page component is here
import About from "./pages/About";  // Assuming your Reviews page component is here
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Cadre from "./pages/Cadre";
import BotezVlad from "./pages/cupluri/BotezVlad";
import CununieRoxanaRemus from "./pages/cupluri/CununieRoxanaRemus";
import NuntaAndreeaAlin from "./pages/cupluri/NuntaAndreeaAlin";
import NuntaClaudiaDragos from "./pages/cupluri/NuntaClaudiaDragos";
import NuntaCristinaAlin from "./pages/cupluri/NuntaCristinaAlin";
import GabrielaAndrei from "./pages/cupluri/GabrielaAndrei";
import NuntaNicoletaMarius from "./pages/cupluri/NuntaNicoletaMarius";
import NuntaRoxanaDragos from "./pages/cupluri/NuntaRoxanaDragos";
import NuntaAdnanaAlin from "./pages/cupluri/NuntaAdnanaAlin";
import NuntaTeodoraTeodor from "./pages/cupluri/NuntaTeodoraTeodor";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cadre" element={<Cadre />} />
          <Route path="/BotezVlad" element={<BotezVlad />} />
          <Route path="/CununieRoxanaRemus" element={<CununieRoxanaRemus />} />
          <Route path="/NuntaAndreeaAlin" element={<NuntaAndreeaAlin />} />
          <Route path="/NuntaClaudiaDragos" element={<NuntaClaudiaDragos />} />
          <Route path="/NuntaCristinaAlin" element={<NuntaCristinaAlin />} />
          <Route path="/GabrielaAndrei" element={<GabrielaAndrei />} />
          <Route path="/NuntaNicoletaMarius" element={<NuntaNicoletaMarius />} />
          <Route path="/NuntaRoxanaDragos" element={<NuntaRoxanaDragos />} />
          <Route path="/NuntaAdnanaAlin" element={<NuntaAdnanaAlin />} />
          <Route path="/NuntaTeodoraTeodor" element={<NuntaTeodoraTeodor />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
  );
}

export default App;
