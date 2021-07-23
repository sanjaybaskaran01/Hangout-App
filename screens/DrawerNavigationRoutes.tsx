import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, StyleSheet,StatusBar } from "react-native";
import Friends from "./TabScreens/Friends";
import Plans from "./TabScreens/Plans";
import Profile from "./DrawerScreens/Profile";
import Settings from "./DrawerScreens/Settings";

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Plans" component={Plans} />
        <Tab.Screen name="Friends" component={Friends} />
      </Tab.Navigator>

  );
};

const DrawerNavigationRoutes = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
      </SafeAreaView>
  );
};

export default DrawerNavigationRoutes;

const styles=StyleSheet.create({
    SafeArea: {
      flex: 1,
    //   backgroundColor: "white",
      paddingTop: StatusBar.currentHeight
    }
  });
