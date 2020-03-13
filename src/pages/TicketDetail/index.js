import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  MapView,
  ButtonContainer,
  StyledBaseButton
} from "./styles";
import Colors from "../../utils/Colors";

export default function TicketDatail() {
  const navigate = useNavigation();

  return (
    <Container>
      <MapView />

      <ButtonContainer>
        <StyledBaseButton
          onPress={() => navigate.goBack()}
          background={Colors.PrimaryLight}
          w={80}
          h={7}
          mb={2}
          fontSize={3}
          color={Colors.PrimaryText}
        >
          Voltar
        </StyledBaseButton>
      </ButtonContainer>
    </Container>
  );
}
