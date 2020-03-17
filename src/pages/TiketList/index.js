import React from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderTicketList from "../../components/HeaderTicketList";
import Card from "../../components/Card";

import { Container, Header } from "./styles";

export default function TiketList() {
  const navigation = useNavigation();

  const ticketList = [
    {
      name: "Romulo Assis",
      ticketId: "a21sd2a2as12d1a23",
      createdAt: "20:30",
      error: true
    },
    {
      name: "Julia Fracetti",
      ticketId: "8a8q98e98qwe8qw8",
      createdAt: "20:31"
    },
    {
      name: "Carlos Fernando",
      ticketId: "5a454ds5as4da",
      createdAt: "20:40"
    },
    {
      name: "Maria Filomena",
      ticketId: "twewegwhten484",
      createdAt: "20:41"
    },
    {
      name: "Maria Filomena",
      ticketId: "twewegwhten48a4",
      createdAt: "20:41"
    },
    {
      name: "Maria Filomena",
      ticketId: "tweweagwhten484",
      createdAt: "21:01"
    }
  ];

  return (
    <>
      <Header>
        <HeaderTicketList />
      </Header>
      <Container>
        <FlatList
          data={ticketList}
          keyExtractor={item => item.ticketId}
          //   ListEmptyComponent={
          //   <View>
          //     <Card />
          //     <Card />
          //   </View>
          // }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("TicketDetail", item.ticketId)}
            >
              <Card props={item} />
            </TouchableOpacity>
          )}
        />
      </Container>
    </>
  );
}
