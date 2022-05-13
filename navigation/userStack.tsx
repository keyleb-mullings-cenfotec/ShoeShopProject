import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


// const Stack = createStackNavigator();


import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import CustomDrawer from "../components/CustomDrawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import CartScreen from "../screens/CartScreen";

const Drawer = createDrawerNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="Items Screen"
        component={ItemsScreen}
        options={{ headerBackTitleVisible: false }}
      />
      <HomeStackNavigator.Screen
        name="Item Detail Screen"
        component={ItemDetailScreen}
        options={{ headerBackTitleVisible: true }}
      />
      <HomeStackNavigator.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{ headerBackTitleVisible: true }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export default function UserStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{ drawerActiveBackgroundColor: '#E6B0AA', drawerActiveTintColor: '#fff', drawerLabelStyle: { marginLeft: -25 } }}>
                <Drawer.Screen name="Home" component={HomeScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        )
                    }} />
                <Drawer.Screen name="Items" component={MyStack} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="pricetags-outline" size={22} color={color} />
                    )
                }} />
                <Drawer.Screen name="Cart" component={CartScreen} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={22} color={color} />
                    )
                }} />
                <Drawer.Screen name="Messages" component={MessagesScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                        )
                    }} />
                <Drawer.Screen name="Profile" component={ProfileScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="person-outline" size={22} color={color} />
                        )
                    }} />
                <Drawer.Screen name="About" component={AboutScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="information-circle-outline" size={22} color={color} />
                        )
                    }} />
                {/*Las pantallas al que el usuario puede entrar*/}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}