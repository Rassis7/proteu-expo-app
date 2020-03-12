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
  background-color: #dddd;
  height: ${getHeight(18)}px;
  width: ${getWidth(95)}px;
  border-radius: 10px;
  padding: 15px;
`;

export const CardTitle = styled.Text`
  font-size: ${getHeight(3.5)}px;
  font-weight: bold;
  color: ${Colors.SecondaryDark};
`;

export const CardTextContainer = styled.View`
  margin-top: ${getHeight(1.5)}px;
`;

export const CardText = styled.Text`
  font-size: ${props => getHeight(props.size)}px;
  color: ${Colors.SecondaryText};
`;

export const CardTextDT = styled.Text`
  font-size: ${getHeight(2.5)}px;
  color: ${Colors.SecondaryText};
`;
