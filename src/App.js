import React from 'react'
import { BreakpointProvider } from 'react-socks'
import { Route, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Profile from './pages/Profile';

import './style.css'

function App(props) {
  const routes = [
    { path: '/', Component: Home, transition: 'fade' },
    { path: '/profile', Component: Profile, transition: 'fade' },
  ]

  return (
    <BreakpointProvider >
      <div className='app'>
      {routes.map(({ path, Component, transition }) => (
        <Route key={path} exact path={path}>
          {({match}) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames='page'
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))
      }
      </div>
    </BreakpointProvider >
  );
}

export default withRouter(App);
