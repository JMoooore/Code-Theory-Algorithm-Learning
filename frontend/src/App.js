import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Comment from './components/Comment';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

const dummyUserData = [
  {
    id: 1,
    first_name: "Kevin",
    last_name: "Heleodoro",
    email: "kh@email.com",
  },
  {
    id: 2,
    first_name: "Fernando",
    last_name: "Curiel-Moysen",
    email: "fc@email.com",
  },
  {
    id: 3,
    first_name: "Paul",
    last_name: "Devlin",
    email: "pd@email.com",
  },
  {
    id: 4,
    first_name: "Isaias",
    last_name: "Nunogalindo",
    email: "in@email.com",
  },
  {
    id: 5,
    first_name: "Hank",
    last_name: "Moore",
    email: "hm@email.com",
  },
  {
    id: 6,
    first_name: "Nick",
    last_name: "Rafaelle",
    email: "nr@email.com",
  },
]

const dummyCommentData = [
  {
    id: 1,
    user_id: 1,
    content: "Cras quam augue, auctor at faucibus at, tincidunt et massa. Morbi viverra augue nunc, a dignissim elit facilisis mattis. Aliquam ut dignissim nunc.",
    created_at: Date.now()
  },
  {
    id: 2,
    user_id: 2,
    content: "Phasellus luctus, nunc in ullamcorper iaculis, purus mauris imperdiet enim, vel euismod lorem turpis vel ligula. Sed id nisi sodales, ullamcorper tellus vel, laoreet purus. Phasellus viverra metus sed nisl efficitur euismod. Nam eu mi vehicula, cursus leo sit amet, eleifend mauris.",
    created_at: Date.now()
  },
  {
    id: 3,
    user_id: 3,
    content: "Donec tempor semper arcu, id tempus neque sagittis finibus.",
    created_at: Date.now()
  },
  {
    id: 4,
    user_id: 4,
    content: "Sed ultricies convallis fermentum. Cras quam augue, auctor at faucibus at, tincidunt et massa.",
    created_at: Date.now()
  },
  {
    id: 5,
    user_id: 5,
    content: "Pellentesque sed lobortis dolor. Nulla ut ante volutpat sapien efficitur condimentum. Aenean volutpat gravida cursus. Cras sit amet lobortis augue.",
    created_at: Date.now()
  },
  {
    id: 6,
    user_id: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor tincidunt, hendrerit enim at, imperdiet dui. Nullam porta eleifend bibendum.  Morbi viverra augue nunc, a dignissim elit facilisis mattis. Aliquam ut dignissim nunc.  ",
    created_at: Date.now()
  },
]

function App() {

  return (
    <Router>      
      <div className="App">
        <Header/>
        {/* <Homepage/> */}
          {/* <Routes> */}
            <Comment
              users={dummyUserData}
              comments={dummyCommentData}
            />
            {/* <Route path="/" element={<Homepage />} /> */}

          {/* </Routes> */}
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
