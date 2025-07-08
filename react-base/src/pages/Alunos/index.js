import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyled';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';
import { get } from 'lodash';
import { FaEdit, FaUserCircle, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setIsLoading(true);
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currenteTarget.nextSibling;
    exclamation.setAtribute('display', 'block');
    e.currenteTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try{
      await axios.delete(`/alunos/${id}`);
     const novosAlunos = {...alunos};
     novosAlunos.splice(index, 1);
     setAlunos(novosAlunos);
     
    }catch(err){
      const errors = get(err, 'response.data.errors', []);
      errors.map(error => toast.error(error));
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.emial}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation onClick={e => handleDelete(e, aluno.id, index)} size={16} display='none' cursor='pointer' />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
