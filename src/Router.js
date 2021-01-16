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
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import initialStore from './context/store'
import reducer from './context/reducer'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    <Provider store={createStore(reducer, initialStore)}>
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
                iconName = 'home'
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
                iconName = focused ? 'star' : 'star-o'
                return <Icon name={iconName} size={25} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
