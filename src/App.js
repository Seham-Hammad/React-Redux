import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-link">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/deposit" className="App-link">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/withdraw" className="App-link">
                Withdraw
              </NavLink>
            </li>
          </ul>

          <Route path='/' exact component={Home} />
          <Route path='/deposit' component={Deposit} />
          <Route path='/withdraw' component={Withdraw} />
        </header>
      </div>
    </Router>

  );
}

export default App;
