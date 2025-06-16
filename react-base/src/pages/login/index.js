import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyled';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
   async function getDate() {
    const response= await axios.get('/alunos');
    const { data } = response;
    }
    getDate();
  }, []);
  return (
    <Container>
      <Title>Login
        <small>Hello World!</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}
