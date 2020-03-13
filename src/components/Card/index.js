import React from "react";

import {
  Container,
  CardContent,
  CardText,
  CardTitle,
  CardTextContainer
} from "./styles";

const Card = React.memo(({ error }) => (
  <Container error={error}>
    <CardContent error={error}>
      <CardTitle error={error}>Romulo Assis</CardTitle>

      <CardTextContainer>
        {!error && <CardText size={3}>Convite: 112as561a615a6</CardText>}
        <CardText size={2.6}>Hora da leitura: 20:25</CardText>
      </CardTextContainer>
    </CardContent>
  </Container>
));

export default Card;
