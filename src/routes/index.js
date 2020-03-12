import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import HomeRouter from "../routes/Home.routes";
import TicketDetail from "../pages/TicketDetail";

const Stack = createStackNavigator();
export default function Router({ state }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {!state.userToken ? (
        <>
          <Stack.Screen name="Home" component={HomeRouter} />
          <Stack.Screen name="TicketDetail" component={TicketDetail} />
        </>
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} />
      )}
    </Stack.Navigator>
  );
}
