import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MainProvider from './context/MainProvider'

import Icon from 'react-native-vector-icons/Ionicons'
import {
  HomeScreen,
  ProductDetailsScreen,
  FavoritesScreen,
  LogoTitle
} from './pages'

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
    <MainProvider>
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
              tabBarIcon: ({ focused }) => {
                let iconName
                iconName = focused ? 'home' : 'home-outline'
                return <Icon name={iconName} size={25} />
              }
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName
                iconName = focused ? 'star' : 'star-outline'
                return <Icon name={iconName} size={25} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
  )
}
