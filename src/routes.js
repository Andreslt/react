import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'

const AppRoutes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </App>
  )
}

export default AppRoutes;