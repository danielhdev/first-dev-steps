import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>
); 