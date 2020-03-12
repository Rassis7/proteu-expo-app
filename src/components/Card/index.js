import React from "react";

import {
  Container,
  CardContent,
  CardText,
  CardTitle,
  CardTextContainer
} from "./styles";
import { Text } from "react-native";

const Card = React.memo(() => (
  <Container>
    <CardContent>
      <CardTitle>Romulo Assis</CardTitle>

      <CardTextContainer>
        <CardText size={3}>Convite: 112as561a615a6</CardText>
        <CardText size={2.6}>Hora da leitura: 20:25</CardText>
      </CardTextContainer>
    </CardContent>
  </Container>
));

export default Card;
