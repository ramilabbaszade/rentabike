import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home';
import Bikes from './Bikes/page/Bikes';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import BikeAd from './BikeAd/pages/BikeAd';
import Footer from './pages/Footer/Footer';
import NewBike from './BikeAd/pages/NewBike';
import User from './User/pages/User';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ProfileDashboard from './ProfileDashboard/pages/ProfileDashboard';
import ProfileEdit from './ProfileDashboard/pages/ProfileEdit';
import Inbox from './pages/Chat/pages/Inbox';

const App = () => {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/list" exact>
            <Bikes />
          </Route>
          <Route path="/bikes/new" exact>
            <NewBike />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/me">
            <ProfileDashboard />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/:bikeId">
            <BikeAd />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
    <Footer />
  </Router>
}

export default App;
