import styled from "styled-components/native";
import { getHeight, getWidth } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${getHeight(3)}px;
`;

export const CardContent = styled.View`
  background-color: ${({ error }) => (!error ? "#eee" : "#ddd")};
  width: ${getWidth(98)}px;
  border-radius: 10px;
  padding: 15px;
  border-width: 1px;

  ${({ error }) => !error && `height: ${getHeight(18)}px;`}
  border-color: ${({ error }) =>
    !error ? Colors.SecondaryDark : Colors.ErrorColor};
`;

export const CardTitle = styled.Text`
  font-size: ${getHeight(3.5)}px;
  font-weight: bold;
  color: ${({ error }) => (!error ? Colors.SecondaryDark : Colors.ErrorColor)};
`;

export const CardTextContainer = styled.View`
  margin-top: ${getHeight(1.5)}px;
`;

export const CardText = styled.Text`
  font-size: ${({ size }) => getHeight(size)}px;
  color: ${Colors.SecondaryText};
`;

export const CardTextDT = styled.Text`
  font-size: ${getHeight(2.5)}px;
  color: ${Colors.SecondaryText};
`;
