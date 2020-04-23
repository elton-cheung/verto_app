/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SettingsHeaderButton(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
      <Image
        source={require('../../assets/logos/settings.png')}
        style={{width: 24, height: 24, padding: 1, marginRight: 15,}}
      />
    </TouchableOpacity>
  );
}
