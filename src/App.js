import React from 'react';
import GlobalStyle from './globalStyles';
import { Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Signin from './pages/SigninPage/Signin';
import Signup from './pages/SignupPage/Signup';
import ScrollToTop from './components/ScrollToTop';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import PrivateRoute from './services/PrivateRoute';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-in' exact component={Signin} />
          <Route path='/sign-up' exact component={Signup} />
          <PrivateRoute role='USER' path='/user/dashboard' exact component={UserDashboard} />
          <PrivateRoute role='ADMIN' path='/admin/dashboard' exact component={AdminDashboard} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
