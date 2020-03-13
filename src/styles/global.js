import styled from "styled-components";
import { getHeight, getWidth } from "../utils/Dimensions";

export const StyledBackgroundShape = styled.View`
  background: ${({ background }) => background};
  height: ${({ height }) => getHeight(height)}px;
  width: ${getWidth(100)}px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
