import React from 'react';
import { Route,Switch} from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Bikes from '../../Bikes/page/Bikes';
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import BikeAd from '../../BikeAd/pages/BikeAd';
import NewBike from '../../BikeAd/pages/NewBike';
import User from '../../User/pages/User';
import Register from '../../pages/Auth/Register';
import Login from '../../pages/Auth/Login';
import ProfileDashboard from '../../ProfileDashboard/pages/ProfileDashboard';
import ProfileEdit from '../../ProfileDashboard/pages/ProfileEdit';
import UpdateBike from '../../BikeAd/pages/UpdateBike';
import ForgotPassword from '../../pages/Helpers/ForgotPassword';
import NotFound from '../common/NotFound'
import { Routes } from "../../routes";
import PrivateRoute from './PrivateRoot'

const App = () => {
  return (<div>
    <MainNavigation/>
    <Switch>
      <Route exact path={Routes.landing} component={Home} />
      <Route exact path={Routes.list} component={Bikes} />
      <Route exact path={Routes.user} component={User} />
      <Route exact path={Routes.bike} component={BikeAd} />
      <Route exact path={Routes.signIn} component={Login} />
      <Route exact path={Routes.register} component={Register} />
      <Route exact path={Routes.forgotPassword} component={ForgotPassword} />
      <PrivateRoute exact path={Routes.bikeCreate} component={NewBike} />
      <PrivateRoute exact path={Routes.bikeUpdate} component={UpdateBike} />
      <PrivateRoute exact path={Routes.authUserUpdate} component={ProfileEdit} />
      <PrivateRoute exact path={Routes.authUserUpdate} component={ProfileDashboard} />
      <Route component={NotFound} />
    </Switch>
  </div>)
}

export default App;
