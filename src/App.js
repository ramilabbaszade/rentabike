import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import Home from './pages/Home/Home';
import Bikes from './bikes/page/Bikes';

const App = () => {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <Bikes />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
}

export default App;
