import React, { useState, useCallback } from 'react';
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
import { AuthContext } from './shared/context/auth-context'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])
  const logout = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list" exact>
          <Bikes />
        </Route>
        <Route path="/bikes/new" exact>
          <NewBike />
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
        <Route path="/:bikeId">
          <BikeAd />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (<Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/list" exact>
        <Bikes />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/:bikeId">
        <BikeAd />
      </Route>
      <Route path="/user/:userId">
        <User />
      </Route>
      <Redirect to="/" />
    </Switch>
    )
  }
  return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
    <Router>
      <MainNavigation />
      <main>
        {routes}
      </main>
      <Footer />
    </Router>
  </AuthContext.Provider>
}

export default App;
