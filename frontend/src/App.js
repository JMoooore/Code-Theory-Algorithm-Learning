import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AllAlgosPage from './pages/AllAlgosPage';
import SingleAlgorithmPage from './pages/SingleAlgorithmPage';
import algos from './algos/index.js';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [user, setUser] = useState(null); //user id for logged in user

    return (
        <Router>
            <div className="App">
                <Header user={user} />

                <Routes>
                    <Route path="/algorithms" element={<AllAlgosPage />} />
                    <Route
                        path="/algorithms/bubbleSort"
                        element={
                            <SingleAlgorithmPage algorithm={algos.bubbleSort} />
                        }
                    />
                    <Route
                        path="/algorithms/quickSort"
                        element={
                            <SingleAlgorithmPage algorithm={algos.quickSort} />
                        }
                    />
                    <Route
                        path="/algorithms/mergeSort"
                        element={
                            <SingleAlgorithmPage algorithm={algos.mergeSort} />
                        }
                    />
                    <Route
                        path="/login"
                        element={<LoginPage setUser={setUser} />}
                    />
                    <Route
                        path="/signup"
                        element={<SignupPage setUser={setUser} user={user} />}
                    />
                    <Route path="/" element={<Homepage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
