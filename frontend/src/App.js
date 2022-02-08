import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AllAlgosPage from './pages/AllAlgosPage';
import SingleAlgorithmPage from './pages/SingleAlgorithmPage';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";


function App() {

  const [singleAlgo, setSingleAlgo] = useState(null)

  return (
    <Router>      
      <div className="App">
        <Header/>
        
          <Routes>
          
            <Route path="/algorithms_page" element={<AllAlgosPage setSingleAlgo={setSingleAlgo}/>} />
            <Route path="/single_algo" element={<SingleAlgorithmPage singleAlgo={singleAlgo}/>} />
            <Route path="/" element={<Homepage />} />

          </Routes>

          <Footer/>
      </div>
    </Router>
  );
}

export default App;
