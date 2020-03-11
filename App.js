import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext, AuthContextProvider } from "./src/context/AuthContext";
import Router from "./src/routes";

export default function App() {
  return (
    <AuthContextProvider>
      <AuthContext.Consumer>
        {state => (
          <NavigationContainer>
            <Router state={state} />
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthContextProvider>
  );
}
