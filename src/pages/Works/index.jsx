import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import NavWorks from '../../components/NavWorks';

const Works = () => (
  <>
    <h1>Works</h1>
    <NavWorks />
    <Switch>
      <Route path="/works/:workSlug">
        <Works />
      </Route>
    </Switch>
  </>
);
export default Works;
