import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";
import Friends from "./TabScreens/Friends";
import Plans from "./TabScreens/Plans";

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Plans" component={Plans} />
        <Tab.Screen name="Friends" component={Friends} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const DrawerNavigationRoutes = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
