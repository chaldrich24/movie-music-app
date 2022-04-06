import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading";

import ProfileScreen from "./screens/ProfileScreen";
import FeedScreen from "./screens/FeedScreen";
import Colors from "./constants/Colors";


const fetchFonts = () => {
  return Font.loadAsync({
    'regular': require('./assets/fonts/JosefinSans-Medium.ttf'),
    'bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  })
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "My Profile", headerTintColor: Colors.text, headerStyle: {
            backgroundColor: Colors.primary
          }
        }}
      />
    </ProfileStack.Navigator>
  );
}

const FeedStack = createNativeStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name='Feed'
        component={FeedScreen}
        options={{
          title: 'Ranger', headerTintColor: Colors.text, headerStyle: {
            backgroundColor: Colors.primary
          }
        }}
      />
    </FeedStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen
            name="FeedStack"
            component={FeedStackScreen}
            options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: ({color}) => (
                <Ionicons name="albums" size={29} style={{color: color}} />
              ),
              tabBarActiveTintColor: 'lightgrey',
              tabBarInactiveTintColor: 'grey',
              tabBarStyle: {
                backgroundColor: '#4d4d4d',
                borderTopColor: '#4d4d4d',
              },
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStackScreen}
            options={{
              headerShown: false,
              title: "Profile",
              tabBarIcon: ({color}) => (
                <Ionicons name="person-circle-outline" size={29} color={color} />
              ),
              tabBarActiveTintColor: 'lightgrey',
              tabBarInactiveTintColor: 'grey',
              tabBarStyle: {
                backgroundColor: '#4d4d4d',
                borderTopColor: '#4d4d4d'
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbd3d8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary
  },
});
