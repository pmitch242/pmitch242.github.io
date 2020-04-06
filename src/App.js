import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'} ><Home /></Route>
          <Route exact path={'/about'}><Profile /></Route>
          <Route exact path={'/portfolio'}><Portfolio /></Route>
          <Route >
            <h1>No page found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
