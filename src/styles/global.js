import styled from "styled-components";
import { getHeight, getWidth } from "../utils/Dimensions";

export const StyledBackgroundShape = styled.View`
  background: ${props => props.background};
  height: ${props => getHeight(props.height)}px;
  width: ${getWidth(100)}px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
