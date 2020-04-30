import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeStack from './components/views/navigation/HomeStack';
import DetailsScreen from './components/views/DetailsScreen';
import SplashScreen from './components/views/SplashScreen';
import Redirect from './components/views/Redirect';
import ChatScreen from './components/views/ChatScreen';
import Verto from './components/views/Redirect';

export default class App {
  render() {
    // if you want to see auth flow:

    //return <HomeStack />;

    const AuthStack = HomeStack;
    const FinalStack = createSwitchNavigator(
      {
        Auth: AuthStack,
        Main: AuthStack,
      },
      {
        initialRouteName: 'Auth',
      },
    );

    const Final = createAppContainer(FinalStack);
    // return <Final />;

    return <Verto />;
  }
}