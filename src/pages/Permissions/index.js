import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import SvgUri from "react-native-svg-uri";
import { useNavigation } from "@react-navigation/native";
import { Text, Modal, View, TouchableHighlight } from "react-native";

import ticket from "../../../assets/ticket.svg";
import redtriangle from "../../../assets/red-triangle.svg";
import { getHeight, getWidth } from "../../utils/Dimensions";
import Button from "../../components/Button";

import { ViewSvg, ContainerModal, Title, ViewSvgTringle } from "./styles";
import Colors from "../../utils/Colors";

export default function Permissions() {
  const navigate = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const verifyPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    verifyPermissions();
    if (hasPermission) return navigate.navigate("Home");
    if (hasPermission === false) setModalVisible(true);

    () => setModalVisible(false);
  }, [hasPermission, setModalVisible]);

  const squareSvg = (getHeight(10) + getWidth(40)) / 2;
  return (
    <>
      <ViewSvg>
        <SvgUri
          width={squareSvg * 2}
          height={squareSvg * 2}
          svgXmlData={ticket}
        />
      </ViewSvg>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <ContainerModal>
          <View>
            <Title>
              Você precisa habilitar as permissões para o funcionamento do
              aplicativo
            </Title>
          </View>

          <ViewSvgTringle>
            <SvgUri
              width={squareSvg}
              height={squareSvg}
              svgXmlData={redtriangle}
            />
          </ViewSvgTringle>

          <View>
            <Button
              onPress={() => verifyPermissions()}
              w={60}
              h={5}
              background={Colors.PrimaryLight}
              fontSize={3}
            >
              <Text>Habilitar</Text>
            </Button>
          </View>
        </ContainerModal>
      </Modal>
    </>
  );
}
