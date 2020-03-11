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

export default function HeaderTicketList() {
  return (
    <Dashboard background="#416DF8" height={31}>
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
