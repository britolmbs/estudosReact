import React from 'react';
import Proptypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.Proptypes = {
  isLoading: Proptypes.bool,
};
