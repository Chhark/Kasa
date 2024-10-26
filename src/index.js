import React from 'react';
import './style/index.css';
import Home from './page/Home';
import A_propos from './page/a-propos';
import Erreur from './page/404';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './page/Logement';
import Header from './components/Header';
import Footer from './components/footer';

const root =  ReactDOM.createRoot(document.getElementById("root") ) 
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/logement/:id' element={<Logement/>} />
        <Route path='/A-propos' element={<A_propos/>}/>
        <Route path='*' element={<Erreur/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)
