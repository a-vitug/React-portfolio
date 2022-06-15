import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} className='Home' />
                <Route exact path='/aboutme' element={<AboutMe />} className='Aboutme' />
                <Route exact path='/projects' element={<Projects />} className='Projects' />
                <Route exact path='/contact' element={<Contact />} className='Contact' />
            </Routes>

        </div>
    );
};

export default App;