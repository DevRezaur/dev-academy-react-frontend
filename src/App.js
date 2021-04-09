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
import ManageCourses from './pages/ManageCourses/ManageCourses';
import AddCourse from './pages/AddCourse/AddCourse';
import CoursePage from './pages/CoursePage/CoursePage';
import EnrollPage from './pages/EnrollPage/EnrollPage';
import ManagePayments from './pages/ManagePayments/ManagePayments';

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
          <PrivateRoute role='USER' path='/user/course/:courseId' exact component={CoursePage} />
          <PrivateRoute role='USER' path='/enroll/course/:courseId' exact component={EnrollPage} />
          <PrivateRoute role='ADMIN' path='/admin/dashboard' exact component={AdminDashboard} />
          <PrivateRoute role='ADMIN' path='/admin/courses' exact component={ManageCourses} />
          <PrivateRoute role='ADMIN' path='/add/course' exact component={AddCourse} />
          <PrivateRoute role='ADMIN' path='/edit/course/:courseId' exact component={AddCourse} />
          <PrivateRoute role='ADMIN' path='/admin/course/:courseId' exact component={CoursePage} />
          <PrivateRoute role='ADMIN' path='/admin/payments' exact component={ManagePayments} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
