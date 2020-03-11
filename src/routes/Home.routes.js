import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

import Colors from "../utils/Colors";
import Scanner from "../pages/Scanner";
import TiketList from "../pages/TiketList";
import Settings from "../pages/Settings";
import { getHeight, getWidth } from "../utils/Dimensions";

const Tab = createBottomTabNavigator();

const IconScannerContainer = styled.View`
  height: ${({ size }) => getHeight(size) + getWidth(size)}px;
  width: ${({ size }) => getHeight(size) + getWidth(size)}px;
  border-radius: ${({ size }) => (getHeight(size) + getWidth(size)) / 2}px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default function HomeRouter() {
  return (
    <Tab.Navigator
      lazy={true}
      initialRouteName="TiketList"
      tabBarOptions={{
        activeTintColor: Colors.SecondaryDark,
        showLabel: false
      }}
    >
      <Tab.Screen
        name="TiketList"
        component={TiketList}
        options={{
          tabBarLabel: "Lista",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          header: { visible: false },
          tabBarIcon: ({ color }) => (
            <IconScannerContainer size={9}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={45}
                style={{ marginBottom: 15 }}
              />
            </IconScannerContainer>
          )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          header: { visible: false },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
