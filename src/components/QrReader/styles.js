import styled from "styled-components/native";
import { getWidth } from "../../utils/Dimensions";
import { BarCodeScanner } from "expo-barcode-scanner";

export const Container = styled.View`
  flex: 1;
`;

export const BarCodeScannerContainer = styled(BarCodeScanner)`
  ${props => props.absoluteFill}
  flex: 1;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Focused = styled.View`
  flex: 10;
`;

export const LayerTB = styled.View`
  flex: 2;
  background-color: #222;
`;

export const LayerCenter = styled.View`
  flex: 7;
  flex-direction: row;
`;

export const LayerLR = styled.View`
  flex: 1;
  background-color: #222;
`;
