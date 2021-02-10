import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavWorks from '../../components/NavWorks';
import CaseStudy from '../../components/CaseStudy';
import Default from './Default';

const Works = () => (
  <>
    <Router>
      <h2>Nos projets</h2>
      <NavWorks />
      <Switch>
        <Route path="/works/:workSlug">
          <CaseStudy />
        </Route>
        <Route path="/">
          <Default />
        </Route>
      </Switch>
    </Router>
  </>
);
export default Works;
