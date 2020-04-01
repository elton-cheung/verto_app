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

// Does this actually do anything? -Jennie

// // Style part of this page
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     marginLeft: 15,
//     marginRight: 15,
//   },
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//     fontSize: 50,
//   },
//   heading: {
//     fontSize: 50,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginTop: 12,
//     marginBottom: 12,
//   },
// });

export default class App extends Component {
  render() {
    return <HomeStack />;
  }
}
