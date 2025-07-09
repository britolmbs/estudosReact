import React from 'react';
import { Container } from '../../styled/GlobalStyled';
import {get} from 'lodash';

export default function Aluno({ match }){
    const id = get(match, 'params.id', 0);
    return (
        <Container>
            <h1>Aluno</h1>
        </Container>
    )
}