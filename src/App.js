import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <BreakpointProvider>

          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/profile'} component={Profile} />
            <Route ><h1>No page found</h1></Route>
          </Switch>
        </BreakpointProvider>
      </div>
    </Router>
  );
}

export default App;
