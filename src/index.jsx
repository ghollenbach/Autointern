import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS (if needed)
import App from './App.jsx'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
