import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={['/']} />
          <Route exact path={['/about']}/>
          <Route exact path={['/portfolio']}/>
          <Route >
            <h1>No page found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
