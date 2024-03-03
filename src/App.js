import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import SectionWithPics from './components/SectionWithPics/SectionWithPics';
import SliderSection from './components/Slider/Slider';

const App = () => {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <SectionWithPics />
      <SliderSection />
    </div>
  );
};

export default App;
