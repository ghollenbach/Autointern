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
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/use">Use</Link></li>
            </ul>

          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/use" element={<Use />} />
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


const data = [ {
  first_name : FIRST_NAME,
  last_name : LAST_NAME,
  user_email : USER_EMAIL,
  mentor_name : MENTOR_NAME,
  mentor_email : MENTOR_EMAIL,
  user_resume : USER_RESUME
} ]

function convertToCSV(data) {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(obj =>
    Object.values(obj).map(value => `"${value}"`).join(',')
  ).join('\n');
  
  return `${headers}\n${rows}`;
}

function downloadCSV(csvString, filename) {
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'user_data.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const csvString = convertToCSV(data);
downloadCSV(csvString, 'user_data.csv');

export default App;
