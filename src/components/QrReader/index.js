import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";

import {
  Container,
  BarCodeScannerContainer,
  Focused,
  LayerTB,
  LayerCenter,
  LayerLR
} from "./styles";

export default function QrReader() {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <Container>
      <BarCodeScannerContainer
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={["qr"]}
        absoluteFill={StyleSheet.absoluteFill}
        type="back"
      >
        <LayerTB />
        <LayerCenter>
          <LayerLR />
          <Focused />
          <LayerLR />
        </LayerCenter>
        <LayerTB />
      </BarCodeScannerContainer>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </Container>
  );
}
