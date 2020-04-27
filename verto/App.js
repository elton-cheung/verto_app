import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeStack from './components/views/navigation/HomeStack';
import Verto from './components/views/Redirect';

export default class App extends Component {
  render() {
    // if you want to see auth flow:

    const AuthStack = HomeStack;
    const VertoStack = Verto;

    const FinalStack = createSwitchNavigator(
        {
            Auth: AuthStack,
            App: VertoStack,
        },
        {
            initialRouteName: 'Auth',
        }
    );

    const Final = createAppContainer(FinalStack);
    return <Final />;

    // else
    //return <Verto />;
  }
}
