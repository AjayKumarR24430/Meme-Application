import React from 'react';
import MemeForm  from './memeForm';
import DisplayMemes from './memesDisplay';
import Header  from './Header';
import { Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MemeForm} />
        <Route exact path="/DisplayMemes" component={DisplayMemes} />
      </Switch>
    </div>
  );
};

export default Routes;
