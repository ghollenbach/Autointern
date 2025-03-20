import './App.css';
import Home from '/workspaces/codespaces-react/src/Home.jsx';
import Use from '/workspaces/codespaces-react/src/Use.jsx';

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
              <li><Link to="/workspaces/codespaces-react/src/Home.jsx">Home</Link></li>
              <li><Link to="/workspaces/codespaces-react/src/Use.jsx">Use</Link></li>
            </ul>

          </nav>
          <Routes>
            <Route path="/workspaces/codespaces-react/src/Home.jsx" element={<Home />} />
            <Route path="/workspaces/codespaces-react/src/Use.jsx" element={<Use />} />
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