import React from "react";

import {
  Container,
  CardContent,
  CardText,
  CardTitle,
  CardTextContainer
} from "./styles";

const Card = React.memo(({ props }) => (
  <Container error={props?.error}>
    <CardContent error={props?.error}>
      <CardTitle error={props?.error}>{props.name}</CardTitle>

      <CardTextContainer>
        {!props?.error && (
          <CardText size={2.3}>Convite: {props.ticketId}</CardText>
        )}
        <CardText size={2.3}>
          Hora da leitura: {props.createdAt.toString()}
        </CardText>
      </CardTextContainer>
    </CardContent>
  </Container>
));

export default Card;
