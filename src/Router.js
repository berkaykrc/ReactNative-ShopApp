import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, FavoritesScreen } from "./pages";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            {/* <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} /> */}
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeStackScreen} />
                <Tab.Screen name='Favorites' component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
