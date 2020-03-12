import React from "react";
import { View } from "react-native";

import {
  Container,
  MapView,
  ButtonContainer,
  StyledBaseButton
} from "./styles";
import { TextBaseButton } from "../../styles/global";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function TicketDatail() {
  const navigate = useNavigation();

  return (
    <Container>
      <MapView />

      <ButtonContainer>
        <StyledBaseButton
          background="#fff"
          borderColor={Colors.PrimaryDark}
          w={80}
          h={7}
          mb={2}
          borderRadius={0.5}
          onPress={() => navigate.goBack()}
        >
          <TextBaseButton fontSize={3} color={Colors.PrimaryDark}>
            Voltar
          </TextBaseButton>
        </StyledBaseButton>
      </ButtonContainer>
    </Container>
  );
}
