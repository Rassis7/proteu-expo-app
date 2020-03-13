import styled from "styled-components/native";
import { StyleSheet } from "react-native";

import { getHeight } from "../../utils/Dimensions";
import Button from "../../components/Button";

export const Container = styled.View`
  flex: 1;
`;

export const MapView = styled.View`
  top: 0;
  height: ${getHeight(35)}px;
  background-color: #666;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledBaseButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;
