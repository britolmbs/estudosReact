import React from 'react';
import { Container } from '../../styled/GlobalStyled';
import {get} from 'lodash';
import PropTypes from 'prop-types';
import { Form } from './styled';

export default function Aluno({ match }){
    const id = get(match, 'params.id', 0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState ('');
    return (
        <Container>
            <h1>{id? 'Editar aluno' : 'Novo Aluno'}</h1>
            <Form>
                
                 </Form>
        </Container>
    )
}
Aluno.propType = {
    match: PropTypes.shape({}).isRequired,
}