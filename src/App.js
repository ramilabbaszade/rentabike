import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home';
import Bikes from './Bikes/page/Bikes';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import BikeAd from './BikeAd/pages/BikeAd';

const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list" exact>
          <Bikes />
        </Route>
        <Route path="/:bikeId">
          <BikeAd />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
}

export default App;
