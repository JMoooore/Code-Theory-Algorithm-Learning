import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AllAlgosPage from './pages/AllAlgosPage';
import SingleAlgorithmPage from './pages/SingleAlgorithmPage';
import algos from './algos/index.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/algorithms" element={<AllAlgosPage />} />
                    <Route
                        path="/algorithms/bubbleSort"
                        element={
                            <SingleAlgorithmPage algorithm={algos.bubbleSort} />
                        }
                    />
                    <Route path="/" element={<Homepage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
