import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./screens/Signin";
import DrawerNavigationRoutes from "./screens/DrawerNavigationRoutes";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
