import React from 'react';
import GlobalStyle from './globalStyles';
import { Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Signin from './pages/SigninPage/Signin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' exact component={Signin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
