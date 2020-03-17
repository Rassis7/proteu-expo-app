import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { View } from "react-native";

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
  margin-bottom: ${getHeight(0.1)}px;
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
          tabBarIcon: ({ color, size }) => (
            <IconScannerContainer size={7}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={40}
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
