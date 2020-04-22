/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image} from 'react-native';
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
      <CatalogStack.Screen name="Home" component={SplashScreen} />
      <CatalogStack.Screen name="Details" component={DetailsScreen} />
    </CatalogStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class Verto extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBarOptions={{
            showIcon: true,
          }}>
          <Tab.Screen
            name="Shop"
            component={CatalogStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/home_icon.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sell"
            component={AddProductContainer}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/camera.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}/>
          <Tab.Screen
            name="Chat"
            component={DetailsScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/message.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
