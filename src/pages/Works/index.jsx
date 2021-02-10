import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavWorks from '../../components/NavWorks';
import CaseStudy from '../../components/CaseStudy';

const Works = () => (
  <Router>
    <h1>Works</h1>
    <NavWorks />
    <Switch>
      <Route path="/works/:workSlug">
        <CaseStudy />
      </Route>
    </Switch>
  </Router>
);
export default Works;
