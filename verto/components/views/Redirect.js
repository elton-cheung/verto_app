/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {AddProductContainer} from './AddProduct';
import {SplashScreen} from './SplashScreen';
import DetailsScreen from './DetailsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class Verto extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName={'Home'}
          >
          <Tab.Screen name="Home" component={SplashScreen} />
          <Tab.Screen name="AddProduct" component={AddProductContainer} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Settings" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
