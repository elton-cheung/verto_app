import React from 'react';
import {View, TextInput, StyleSheet, Image, Button}  from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0

const Simple = (props) => (
  <Onboarding
  onSkip={props.navigation.navigate('SignLog')}
  onDone={props.navigation.navigate('SignLog')}
  flatlistProps={props.navigation}
  //SkipButtonComponent={Skip}
  bottomBarHighlight={false}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/verto_logo.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        //image: <Image source={require('./images/square.png')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#fff',
        //image: <Image source={require('./images/triangle.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);
export default Simple;
