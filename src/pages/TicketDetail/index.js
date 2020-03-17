import React from "react";
import { useNavigation } from "@react-navigation/native";
import SvgUri from "react-native-svg-uri";
import { lighten } from "polished";

import success from "../../../assets/success.svg";
import fail from "../../../assets/fail.svg";

import {
  Container,
  MapView,
  ButtonContainer,
  StyledBaseButton
} from "./styles";
import Colors from "../../utils/Colors";

export default function TicketDatail({ ticketId }) {
  const navigate = useNavigation();

  const infoTicket = {
    name: "Romulo Assis",
    ticketId: "a21sd2a2as12d1a23",
    createdAt: "20:30",
    success: true
  };

  return (
    <Container>
      <MapView success={infoTicket.success}>
        <SvgUri
          width={150}
          height={150}
          svgXmlData={infoTicket.success ? success : fail}
        />
      </MapView>

      <ButtonContainer>
        <StyledBaseButton
          onPress={() => navigate.goBack()}
          background={
            infoTicket.success
              ? Colors.SuccessColor
              : lighten(-0.05, Colors.FailColor)
          }
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
