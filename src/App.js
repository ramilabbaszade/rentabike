import React, { useContext } from 'react';
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
import UpdateBike from './BikeAd/pages/UpdateBike';
import ForgotPassword from './pages/Helpers/ForgotPassword';
import { AuthContext } from './shared/context/AuthContext';
import BikesContextProvider from './shared/context/BikesContext';
import UsersContextProvider from './shared/context/UsersContext';
import UserContextProvider from './shared/context/UserContext';

const App = () => {
  const { isAuth } = useContext(AuthContext)
  let routes;
  if (isAuth) {
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
        <Route path="/me/edit">
          <ProfileEdit />
        </Route>
        <Route path="/inbox">
          <Inbox />
        </Route>
        <Route path="/me">
          <ProfileDashboard />
        </Route>
        <Route path="/update/:bId">
          <UpdateBike />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/b/:bikeId">
          <BikeAd />
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
      <Route path="/restore-account">
        <ForgotPassword />
      </Route>
      <Route path="/user/:userId">
        <User />
      </Route>
      <Route path="/b/:bikeId">
        <BikeAd />
      </Route>
      <Redirect to="/" />
    </Switch>
    )
  }
  return <React.Fragment>
    <Router>
      <UserContextProvider>
        <MainNavigation />
        <BikesContextProvider>
          <UsersContextProvider>
            <main>
              {routes}
            </main>
          </UsersContextProvider>
        </BikesContextProvider>
      </UserContextProvider>
      <Footer />
    </Router>
  </React.Fragment>
}

export default App;
