import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyled';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotao());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Hello World!</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
