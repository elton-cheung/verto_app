import React from 'react';
import {View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './navigation/HomeStack';
import SignLogIn from './SignLogIn';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'

const SettingsStack = createStackNavigator();


export default function SettingsScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsContainer}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen name="Login" component={SignLogIn} />
    </SettingsStack.Navigator>
  );
}

class SettingsContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>token_user: {JSON.stringify(token_user)}</Text>
        <Button
          title="Logout"
          type="solid"
          onPress={() => {
            this.props.navigation.goBack();
            this.props.navigation.navigate('Auth');
          }}
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
