import React, { useState } from 'react';

import { Container } from '../../components/Loading/styled';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';

export default function Fotos() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          <input type="file" id="foto" />
        </label>
      </Form>
    </Container>
  );
}
