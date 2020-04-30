import React from 'react';
import {View, TextInput, StyleSheet, Image, ImageBackground, Button, Icon}  from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0

class OnBoard extends React.Component{
  render(){
    return(
      <Onboarding
      onSkip={() => this.props.navigation.navigate('App')}
      onDone={() => this.props.navigation.navigate('App')}
      flatlistProps={this.props.navigation}

      bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: '#fff',
            image: <>
                   <Image
                        style={styles.onboardingPic}
                        source={require('../../assets/images/Buy&Sell.png')}/>
                   </>,
            title:'',
            subtitle:'',
          },
          {
            backgroundColor: '#fff',
            image: <>
                   <Image
                        style={styles.onboardingPic}
                        source={require('../../assets/images/SnapShopSell.png')}/>
                   </>,
            title:'',
            subtitle:'',
          },

          {
            backgroundColor: '#fff',
            image: <>
                   <Image
                        style={styles.onboardingPic}
                        source={require('../../assets/images/JustVertoIt.png')}/>
                   </>,
            title:'',
            subtitle:'',

          },
        ]}
      />
    )
  }
}


const styles = StyleSheet.create({
    onboardingPic: {
        //justifyContent: 'center',
        alignItems: 'center',
        //resizeMode: 'contain',
       // bottom:10000000000,
        //justifyContent: 'flex-end',
        transform:[{scale:0.35}],
        //flex:100,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
    },

    tinyLogo: {
        position: 'relative',
        resizeMode: 'contain',
        width: 100,
        height: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 500,
    },
});

export default OnBoard;
