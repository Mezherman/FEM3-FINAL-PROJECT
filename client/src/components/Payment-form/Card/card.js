import React from 'react';
import Cards from 'react-credit-cards';
import Container from './_card';

const Card = (props) => (
  <Container>
    <Cards {...props} />
  </Container>
);

export default Card;
