import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UnderProgress from './UnderProgress';
import Our_Team from './Our-Team/main-our-team';
import './index.css';
import About from './About/About';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UnderProgress />} />
        <Route path="/events" element={<UnderProgress />} />
        <Route path="/timeline" element={<UnderProgress />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<Our_Team />} />
        <Route path="/sponsors" element={<UnderProgress />} />
      </Routes>
    </div>
  );
};

export default App;