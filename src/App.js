import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';


function App() { 
  return (
  <div>
    <Nav />
    <main>
      <LandingPage />
      <About />
      <Offer />
      <Footer />
    </main>
  </div>
  );
}

export default App;
