import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyled';
import { Form } from './styled';
import { toast } from 'react-toastify';
import { isemail } from 'validator';
import Loading from '../../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);
  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve conter 3 a 255 caracteres');
    }

    if (!isemail(email)) {
      formErrors = true;
      toast.error('email invalido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve conter 6 a 50 caracteres');
    }
    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
