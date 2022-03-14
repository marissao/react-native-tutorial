import Toast from 'react-native-toast-message';
import "react-native-gesture-handler"; // Place on top of app
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import { Icon } from "react-native-elements";
import {StyleSheet} from "react-native";

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
        <Stack.Screen     
        name="Home" 
        component={HomeScreen} 
        options={({navigation}) => ({
            headerRight: () => (
                <Icon 
                name="plus" 
                type="feather" 
                color="#ffffff"
                style={style.headerIcon}
                onPress={() => navigation.navigate('New')}
            />
        )
        })}
    />
        <Stack.Screen
          name='New'
          component={NewScreen}
          options={{
            headerStyle: {
              backgroundColor: "#228CDB",
            },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});

// Apply header styles to Navigator component instead of Screen component to avoid repeating
