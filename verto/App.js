import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Link,
} from 'react-native';
import HomeStack from './components/views/navigation/HomeStack';
import Verto from './components/views/Redirect';

export default class App extends Component {
  render() {
    // if you want to see auth flow:
    // return <HomeStack />;

    // else
    return <Verto />;
  }
}
