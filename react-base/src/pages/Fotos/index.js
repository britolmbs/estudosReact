import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Container } from '../../components/Loading/styled';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import toast from 'react-toastify';
import history from '../../services/history';
import PropTypes from 'prop-types';


export default function Fotos({ match }) {
const id = get(match,  'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(()=> {
    const getData = async () => {
      try {
        setIsLoading(true);
       const {data} =  await axios.get(`/alunos/${id}`);
       setFoto(get(data, 'Fotos[0].url', ''));
       setIsLoading(false)
      } catch {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }

    }
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : 'Selecione uma foto'}
          <input type="file" id="foto" />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
