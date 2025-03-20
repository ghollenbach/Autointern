import './App.css';
import Home from './Home.jsx';
import Use from './Use.jsx';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">
                    <img src="/monkey.png" alt="AutoIntern Logo" className="logo" />
                </Link>
              </li>
              <li><Link to="home">Home</Link></li>
              <li><Link to="use">Use</Link></li>
            </ul>

          </nav>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="use" element={<Use />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
}

var FIRST_NAME = document.getElementById("first_name")
var LAST_NAME = document.getElementById("last_name")
var USER_EMAIL = document.getElementById("user_email")
var MENTOR_NAME = document.getElementById("mentor_name")
var MENTOR_EMAIL = document.getElementById("mentor_email")
var USER_RESUME = document.getElementById("user_resume")

var csv = new csv();

export default App;
