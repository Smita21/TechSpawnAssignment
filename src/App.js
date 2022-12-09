import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={< LandingPage/> }></Route> 
                    <Route exact path="/login" element={< LoginPage/> }></Route> 
                    <Route exact path="/home" element={< HomePage/> }></Route> 
                </Routes>
            </div>
        </Router>
    )
}
