import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, FavoritesScreen } from "./pages";
import { createBottomNavigator } from '@react-navigation/bottom-tabs';

export const Tab = createBottomNavigator();


export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Favorites' component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
