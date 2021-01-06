import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import Userform from "./components/userform/userform";
import { Counter } from './components/counter/counter';
import About from './components/About';
ReactDOM.render(
  <React.StrictMode> //component tree
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="" >Home</Link>
            </li>
            <li>
              <Link to="userform" >Userform</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/userform">
            <Userform></Userform>
          </Route>
          <Route path='/:id' children={<About />}></Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
