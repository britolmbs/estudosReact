import React from 'react';
import { Container } from '../../styled/GlobalStyled';
import {get} from 'lodash';
import PropTypes from 'prop-types';

export default function Aluno({ match }){
    const id = get(match, 'params.id', 0);
    return (
        <Container>
            <h1>{id? 'Editar aluno' : 'Novo Aluno' }</h1>
        </Container>
    )
}
Aluno.propType = {
    match: PropTypes.shape({}).isRequired,
}