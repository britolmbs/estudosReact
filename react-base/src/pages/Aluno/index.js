import React, { useEffect, useState } from 'react';
import { Container } from '../../styled/GlobalStyled';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Form, ProfilePicture, Tittle } from './styled';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', '');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setFoto(Foto);

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

  const handleSubmit = async (e) => {
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

    if (!formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          altura,
          peso,
        });
        toast.success('Aluno Editado com sucesso');
      } else {
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno criado com sucesso');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      }
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Tittle>{id ? 'Editar aluno' : 'Novo Aluno'}</Tittle>

      {id && (
        <ProfilePicture>
          {foto ? (<img src={foto} alt={nome} />) : (
            <FaUserCircle size={180} />
            <Link to={`/fotos/${id}`}>
              <FaEdit size={24} />
            </Link>
          )}
        </ProfilePicture>
      )}
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
