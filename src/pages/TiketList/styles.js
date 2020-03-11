import styled from "styled-components/native";

import { StyledBackgroundShape } from "../../styles/global";
import { getHeight } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

export const Container = styled.View``;

export const Dashboard = styled(StyledBackgroundShape)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ViewInfos = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextTotal = styled.Text`
  font-size: ${getHeight(5)}px;
  color: ${Colors.PrimaryText};
`;

export const TextQtdTotal = styled.Text`
  font-size: ${getHeight(10)}px;
  color: ${Colors.PrimaryText};
  margin-top: -${getHeight(3)}px;
`;

export const TextOk = styled.Text`
  font-size: ${getHeight(3)}px;
  color: ${Colors.PrimaryText};
`;

export const TextQtdOk = styled.Text`
  font-size: ${getHeight(5)}px;
  color: ${Colors.PrimaryText};
`;

export const TextNotOk = styled.Text`
  font-size: ${getHeight(3)}px;
  color: ${Colors.PrimaryText};
`;

export const TextQtdNotOk = styled.Text`
  font-size: ${getHeight(5)}px;
  color: ${Colors.PrimaryText};
`;

export const Space = styled.View`
  padding: ${getHeight(0.4)}px;
`;
