/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ProfileHeaderButton(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
      <Image
        source={require('../../assets/logos/account.png')}
        style={{width: 24, height: 24, padding: 1, marginLeft: 15}}
      />
    </TouchableOpacity>
  );
}
