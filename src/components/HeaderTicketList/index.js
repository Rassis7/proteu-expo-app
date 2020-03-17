import React from "react";
import { View } from "react-native";

import {
  Dashboard,
  ViewInfos,
  TextQtdTotal,
  TextTotal,
  TextRight,
  TextQtdRight,
  Space
} from "./styles";
import Colors from "../../utils/Colors";

export default function HeaderTicketList() {
  return (
    <Dashboard background={Colors.Primary} height={30}>
      <ViewInfos>
        <TextTotal>Lidos</TextTotal>
        <TextQtdTotal>20</TextQtdTotal>
      </ViewInfos>
      <View>
        <ViewInfos>
          <TextRight>Passaram</TextRight>
          <TextQtdRight>19</TextQtdRight>
        </ViewInfos>
        <Space />
        <ViewInfos>
          <TextRight>Não Passaram</TextRight>
          <TextQtdRight>1</TextQtdRight>
        </ViewInfos>
      </View>
    </Dashboard>
  );
}
