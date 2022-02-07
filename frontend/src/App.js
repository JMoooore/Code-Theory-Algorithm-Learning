import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AllAlgosPage from './pages/AllAlgosPage';
import SingleAlgorithmpage from './pages/SingleAlgorithmpage';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";


function App() {

  return (
    <Router>      
      <div className="App">
        <Header/>
        
          <Routes>
          
            <Route path="/algorithms_page" element={<AllAlgosPage />} />
            <Route path="/single_algo" element={<SingleAlgorithmpage />} />
            <Route path="/" element={<Homepage />} />

          </Routes>

          <Footer/>
      </div>
    </Router>
  );
}

export default App;
