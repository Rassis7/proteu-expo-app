import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderTicketList from "../../components/HeaderTicketList";
import Card from "../../components/Card";

export default function TiketList() {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderTicketList />
      <TouchableOpacity onPress={() => navigation.navigate("TicketDetail")}>
        <Card />
      </TouchableOpacity>

      <Card />
      <Card />
    </View>
  );
}
