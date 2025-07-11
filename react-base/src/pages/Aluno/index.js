import React, { useEffect, useState } from 'react';
import { Container } from '../../styled/GlobalStyled';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Form } from './styled';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
          history.push('/');
        }
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ser maior que 3 letras');
    }
    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('Sobrenome precisa ser maior que 3 letras');
    }

    if (!isEmail(email)) {
      toast.error('E-mail invalido');
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade invalida');
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso invalido');
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura invalida');
      formErrors = true;
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
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
