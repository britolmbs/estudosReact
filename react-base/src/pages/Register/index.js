import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyled';
import { Form } from './styled';
import { toast } from "react-toastify"
import { isemail} from "validator";
import axios from '../../services/axios'
import { get } from 'lodash';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
   async function handleSubmit (e) {
    e.preventDefault();
    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
        formErrors = true;
        toast.error("Nome deve conter 3 a 255 caracteres");
 }

 if(!isemail(email)){
    formErrors = true;
    toast.error('email invalido');
 }

 if(password.length < 6 || password.length> 50) {
    formErrors = true;
    toast.error("Senha deve conter 6 a 50 caracteres");
 }
 if(formErrors) return;

 try {
    const response = await axios.post('/Users/', {
        nome, password, email
    });
 } catch (e) {
    const status = get()
 }

  }
  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite seu Email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="digite sua senha"
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
