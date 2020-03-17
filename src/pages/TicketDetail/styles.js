import styled from "styled-components/native";

import { getHeight } from "../../utils/Dimensions";
import Button from "../../components/Button";
import Colors from "../../utils/Colors";
import { lighten } from "polished";

export const Container = styled.View`
  flex: 1;
`;

export const MapView = styled.View`
  top: 0;
  height: ${getHeight(35)}px;
  background-color: ${({ success }) =>
    success
      ? lighten(-0.05, Colors.SuccessColor)
      : lighten(-0.05, Colors.FailColor)};
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${getHeight(1.5)}px;
`;

export const StyledBaseButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;
