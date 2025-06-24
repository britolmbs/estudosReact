import React from 'react';
import { Routes } from 'react-router-dom';
import Login from '../pages/login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesComponent() {
  return (
    <Routes>
      <MyRoute exact path="/" Component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" Component={Aluno} isClosed />
      <MyRoute exact path="/aluno" Component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" Component={Fotos} isClosed />
      <MyRoute exact path='/login/' Component={Login} isClosed={false} />
      <MyRoute exact path="/register/" Component={Register} isClosed={false} />
      <MyRoute path="*" Component={Page404} />
    </Routes>
  );
}
