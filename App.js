import "react-native-gesture-handler"; // Place on top of app
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#228CDB",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='New'
          component={NewScreen}
          options={{
            headerStyle: {
              backgroundColor: "#228CDB",
            },
            headerTintColor: "fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Apply header styles to Navigator component instead of Screen component to avoid repeating
