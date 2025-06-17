import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyled';
import axios from '../../services/axios';
import { useDispatch } from 'react-redux';

export default function Login() {

  const dispatch = useDispatch();

 function handleClick(e){
  e.preventDefault();
  dispatch({
    type: 'BOTAO_CLICADO',
    
  });
 }
  return (
    <Container>
      <Title>Login
        <small>Hello World!</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
}
