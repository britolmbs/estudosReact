import React from 'react';
import { Routes } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesComponent() {
  return (
    <Routes>
      <MyRoute path="/" Component={Login} />
      <MyRoute path="*" Component={Page404} />
    </Routes>
  );
}
