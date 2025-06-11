import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" Component={Login} />
      <Route path="*" Component={Page404} />
    </Switch>
  );
}
