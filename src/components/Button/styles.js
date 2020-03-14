import styled, { css } from "styled-components";
import { getHeight, getWidth } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: ${({ w }) => getWidth(w)}px;
  height: ${({ h }) => getHeight(h)}px;
  background: ${({ background }) => background};

  ${({ mt }) => mt && `margin-top: ${getHeight(mt)}px;`}

  ${({ mb }) => mb && `margin-bottom: ${getHeight(mb)}px;`}
`;

export const ViewButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ h }) => getHeight(h)}px;
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-width: 1px;
      border-top-color: ${borderColor};
    `}
`;

export const TextButton = styled.Text`
  color: ${({ color }) => (!color ? Colors.PrimaryText : color)};
  font-size: ${({ fontSize }) => (fontSize ? getHeight(fontSize) : 14)}px;
`;
