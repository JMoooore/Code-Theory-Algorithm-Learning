import React from 'react';
import Header from './Header';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function App() {

  return (
    <Router>      
      <div className="App">
        <Header/>
          <Routes>

            {/* <Route path="/" element={<Homepage />} /> */}

          </Routes>
      </div>
    </Router>
  );
}

export default App;
