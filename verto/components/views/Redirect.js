/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {AddProductContainer} from './AddProduct';
import {SplashScreen} from './SplashScreen';
import DetailsScreen from './DetailsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const CatalogStack = createStackNavigator();

function CatalogStackScreen() {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen
        name="Home"
        component={SplashScreen}
      />
      <CatalogStack.Screen name="Details" component={DetailsScreen} />
    </CatalogStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class Verto extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName={'Home'}>
          <Tab.Screen name="Home" component={CatalogStackScreen} />
          <Tab.Screen name="AddProduct" component={AddProductContainer} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Settings" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
