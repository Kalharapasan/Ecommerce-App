import React from 'react';
import './App.css';
import Layout from './Components/Layout';
import Home from './pages/Home';
import About from './pages/About';  
import Contact from './pages/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
