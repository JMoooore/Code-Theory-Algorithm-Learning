import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";


function App() {

  return (
    <Router>      
      <div className="App">
        <Header/>
        <Homepage/>
          <Routes>

            {/* <Route path="/" element={<Homepage />} /> */}

          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
