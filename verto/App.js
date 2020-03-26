/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text} from 'react-native';
import {AddProductContainer} from './components/views/AddProduct';
import {SplashScreen} from './components/views/SplashScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Splash" component={SplashScreen} />
          <Tab.Screen name="AddProduct" component={AddProductContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
