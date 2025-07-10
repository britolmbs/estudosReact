import React, { useState } from 'react';
import { Container } from '../../styled/GlobalStyled';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Form } from './styled';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>{id ? 'Editar aluno' : 'Novo Aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Digite seu sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Digite sua idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
        />

        <button type="submit">enviar</button>
      </Form>
    </Container>
  );
}
Aluno.propType = {
  match: PropTypes.shape({}).isRequired,
};
