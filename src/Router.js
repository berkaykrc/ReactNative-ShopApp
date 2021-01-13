import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  HomeScreen,
  ProductDetailsScreen,
  FavoritesScreen,
  LogoTitle
} from './pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />
        }}
      />
      <HomeStack.Screen name="ProductDetail" component={ProductDetailsScreen} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused }) => {}
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => {}
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
