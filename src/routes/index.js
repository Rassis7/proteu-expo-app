import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import HomeRouter from "../routes/Home.routes";

const Stack = createStackNavigator();
export default function Router({ state }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={!state.userToken ? "Home" : "SignIn"}
        component={!state.userToken ? HomeRouter : SignIn}
      />
    </Stack.Navigator>
  );
}
