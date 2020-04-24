import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Logout" type="solid"
        onPress={() => this.props.navigation.navigate('LogIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    width: 150,
  },
});
