import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';



const App = lazy(() => import('./App'));
const Signup = lazy(() => import('./pages/Signup'));



class AppRoutes extends Component {
  render () {
    return (
     <div>hello</div>
        // <Switch>
        //   <Route exact path="/signup" component={ Signup } />
        //   <Route exact path="/home" component={ App } />
        //   <Redirect to="/home" />
        // </Switch>
     
    );
  }
}

export default AppRoutes;