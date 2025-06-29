import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyled';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isemail } from 'validator';
import * as actions from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

export default function Login(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const prevPath = get(props, 'location.state.prevPath', '/');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isemail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('senha inválida');
    }
    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua Senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
