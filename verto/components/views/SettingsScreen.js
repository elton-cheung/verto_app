import React from 'react';
import {View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator, CommonActions} from '@react-navigation/stack';
import HomeStack from './navigation/HomeStack';
import SignLogIn from './SignLogIn';
import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
} from 'react-native-secure-storage';

const SettingsStack = createStackNavigator();

export default function SettingsScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsContainer}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}

class SettingsContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Logout"
          type="solid"
          onPress={() => {
            this.props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {name: 'Home'},
                  {
                    name: 'Profile',
                    params: {user: 'jane'},
                  },
                ],
              }),
            );
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
