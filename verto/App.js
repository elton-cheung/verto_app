import React, {Component} from 'react';
import Verto from './components/views/Redirect';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Link,
} from 'react-native';
import HomeStack from './components/views/navigation/HomeStack';

export default class App extends Component {
  render() {
    // if you want to see auth flow:
    //return <HomeStack />;

    // else
    return <Verto />;
  }
}
