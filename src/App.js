import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import './App.css'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {

    return (
        <ParallaxProvider>
            <div className='App'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} className='Home' />
                    <Route exact path='/aboutme' element={<AboutMe />} className='Aboutme' />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/portfolio' element={<Portfolio />} className='Portfolio' />
                    <Route exact path='/contact' element={<Contact />} className='Contact' />
                </Routes>
                <Footer />
            </div>
        </ParallaxProvider>
    );
};

export default App;