import styled, { css } from "styled-components/native";
import { getHeight, getWidth } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${getHeight(1.3)}px;
`;

export const CardContent = styled.View`
  background-color: #fff;
  width: ${getWidth(95)}px;
  border-radius: 10px;
  padding: 15px;

  ${({ error }) =>
    error &&
    css`
      border-color: ${Colors.ErrorColor}
      border-width: 1px;
  `};
`;

export const CardTitle = styled.Text`
  font-size: ${getHeight(2.7)}px;
  font-weight: bold;
  color: ${({ error }) => (!error ? Colors.SecondaryDark : Colors.ErrorColor)};
`;

export const CardTextContainer = styled.View`
  margin-top: ${getHeight(1.7)}px;
`;

export const CardText = styled.Text`
  font-size: ${({ size }) => getHeight(size)}px;
  color: ${Colors.SecondaryText};
`;

export const CardTextDT = styled.Text`
  font-size: ${getHeight(2.5)}px;
  color: ${Colors.SecondaryText};
`;
