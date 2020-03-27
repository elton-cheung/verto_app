/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {AddProductContainer} from './AddProduct';
import {SplashScreen} from './SplashScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class Redirect extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SplashScreen} />
          <Tab.Screen name="AddProduct" component={AddProductContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
