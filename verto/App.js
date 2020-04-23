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

export default class App extends Component {
  render() {
    return <HomeStack />;
  }
}
