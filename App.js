import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AntDesign} from '@expo/vector-icons';

import ProfileScreen from "./screens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "My Profile" }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer style={styles.container}>
    <Tab.Navigator>
      <Tab.Screen name='ProfileStack' component={ProfileStackScreen} options={{headerShown: false, title: 'Profile', tabBarIcon: () => <AntDesign name="profile" size={22} color='black' />}} />
    </Tab.Navigator>
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbd3d8",
    alignItems: "center",
    justifyContent: "center",
  },
});
