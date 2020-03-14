import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";

import HomeRouter from "./Home.routes";
import TicketDetail from "../pages/TicketDetail";
import Permissions from "../pages/Permissions";

const Stack = createStackNavigator();
export default function Router({ state }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Permissions"
    >
      {!state.userToken ? (
        <>
          <Stack.Screen name="Permissions" component={Permissions} />
          <Stack.Screen name="TicketDetail" component={TicketDetail} />
          <Stack.Screen name="Home" component={HomeRouter} />
        </>
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} />
      )}
    </Stack.Navigator>
  );
}
