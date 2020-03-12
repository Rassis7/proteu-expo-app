import styled from "styled-components";
import { getHeight, getWidth } from "../utils/Dimensions";
import { RectButton } from "react-native-gesture-handler";
import Colors from "../utils/Colors";

export const BaseButton = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => getWidth(w)}px;
  height: ${({ h }) => getHeight(h)}px;
  background: ${({ background }) => background};
  border-radius: 4px;

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-width: 1px;
      border-color: 1px ${borderColor};
    `}
  
  ${({ mt }) => mt && `margin-top: ${getHeight(mt)}px;`} 
  
  ${({ mb }) => mb && `margin-bottom: ${getHeight(mb)}px;`} 
  
  ${({ borderRadius, h }) =>
    borderRadius && `border-radius: ${getHeight(h) * borderRadius}px;`}
`;

export const TextBaseButton = styled.Text`
  color: ${({ color }) => (!color ? Colors.PrimaryText : color)};
  font-size: ${({ fontSize }) => (fontSize ? getHeight(fontSize) : 14)}px;
`;

export const StyledBackgroundShape = styled.View`
  background: ${({ background }) => background};
  height: ${({ height }) => getHeight(height)}px;
  width: ${getWidth(100)}px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
