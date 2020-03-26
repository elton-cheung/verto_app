/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text} from 'react-native';
import {AddProductContainer} from './components/views/AddProduct';
import {SplashScreen} from './components/views/SplashScreen';
import HomeStack from './homeStack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

class SettingsScreen extends React.Component {
  render() {
    return <AddProductContainer />;
  }
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    state = {
        username: '',
        password: '',
        auth_token: 'usesd'
    }
    render() {
        if (this.state.auth_token == '') {
            return (
                <HomeStack />
            );
        }
        else {
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
}
