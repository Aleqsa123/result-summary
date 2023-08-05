import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Maindiv from './maindiv.js';
import Results from './results';

function App() {
  return (
    <div className="App" style={{margin: 0, padding: 0,
      boxSizing: 'border-box'}}>
        <div className='maindiv'>
          <Maindiv />
        </div>
        <div className='results'>
          <Results />
        </div>

    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

