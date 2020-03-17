import styled from "styled-components";
import Colors from "../../utils/Colors";
import { getHeight } from "../../utils/Dimensions";

export const ViewSvg = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewSvgTringle = styled.View`
  margin-bottom: ${getHeight(15)}px;
  margin-top: ${getHeight(15)}px;
`;

export const Title = styled.Text`
  font-size: 23px;
  text-align: center;
  color: ${Colors.SecondaryText};
  font-weight: 500;
`;
