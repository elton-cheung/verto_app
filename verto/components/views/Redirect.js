/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image} from 'react-native';
import {AddProductScreen} from './AddProduct';
import {SplashScreen} from './SplashScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import SettingsHeaderButton from '../reusable/SettingsHeaderButton';
import ProfileHeaderButton from '../reusable/ProfileHeaderButton';
import HeaderTitle from '../reusable/HeaderTitle';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const CatalogStack = createStackNavigator();
async() => {
    const got = await SecureStorage.getItem(token_user, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
}
function CatalogStackScreen(props) {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen
        name="Shop"
        component={SplashScreen}
        options={{
          headerLeft: () => (
            <ProfileHeaderButton navigation={props.navigation} />
          ),
          headerTitle: () => <HeaderTitle />,
          headerRight: () => (
            <SettingsHeaderButton navigation={props.navigation} />
          ),
        }}
      />
      <CatalogStack.Screen name="Details" component={DetailsScreen} />
      <CatalogStack.Screen name="Settings" component={SettingsScreen} />
      <CatalogStack.Screen name="Profile" component={ProfileScreen} />
    </CatalogStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default class Verto extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBarOptions={{
            showIcon: true,
          }}>
          <Tab.Screen
            name="Shop"
            component={CatalogStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/home_icon.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sell"
            component={AddProductScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/camera.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={DetailsScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/logos/message.png')}
                  style={{
                    marginLeft: 1,
                    marginTop: 1,
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};
