import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import React from "react";
import Userform  from "./components/userform/userform";
import { Counter } from './components/counter/counter';
function App() {  //Container Component
  return (   //JSX expression
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userform">Userform</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route component={Home} path="/">
          <Counter/>
        </Route>
        <Route component={Userform} path="/userform">
          <Home></Home>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
