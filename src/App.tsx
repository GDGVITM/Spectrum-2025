import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Our_Team from './Our-Team/main-our-team';
import './index.css';
import About from './About/About';
import Sponsor from './Sponsor/Sponsor';
import Home from './components/Home'; 
import Events from './Events/Events';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Our_Team />} />
        <Route path="/sponsors" element={<Sponsor />} />
      </Routes>
    </div>
  );
};

export default App;
