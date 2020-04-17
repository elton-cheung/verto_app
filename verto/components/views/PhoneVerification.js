/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text, Linking} from 'react-native';
import { Icon } from 'react-native-elements';
// import styles from './style/signUpFlowStyle.js';

class PhoneVer extends React.Component {
  state = {
    email: '',
    confemail: '',
    errorMessage: 'Enter Code Here',
    error: true
  };
  
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  // After e-mail verification, we need to set up phone verification
  signUp = async () => {
    const {email, confemail} = this.state;
    try {
      // here place your signup logic
      console.log('Next adding phone number!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  completeEmail() {
    // this.signUp;
    this.props.navigation.navigate('PhoneVer');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../assets/images/verto_logo.png')}
          />
        </View>



        <View style={styles.body}>
        <View style={styles.header}>
          <Image
            style={styles.image2}
            source={require('../../assets/images/Placeholder.jpg')}
          />
        </View>

        <Text style={{textAlign: 'center', fontSize: 15}}>Phone Number Verification</Text>
        <TextInput
          textAlign={'center'}
            style={styles.input}
            placeholder="6 Digit"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder={this.state.errorMessage}
            placeholderTextColor="red"
            onChangeText={val => this.onChangeText('password', val)}
            maxLength={6}
          />
          <Text style={{textAlign: 'center', fontSize: 15}}>An SMS message will been sent</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>to the above phone number</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Please enter the 6-digit code</Text>
        </View>

        <View style={styles.otherInput}>
          <Button
            title="Verify Phone Number"
            onPress={() => this.props.navigation.navigate('Onboard')}
          />
                    <Text style={{textAlign: 'center', fontSize: 15}}>If you have not received the SMS, please click to</Text>
<Text style={{color: 'blue'}}
      onPress={() => this.state.error ? this.setState({errorMessage: "Wrong Code"}) : alert("SMS sent")}>
  resend SMS
</Text>
        </View>
        

      </View>
    );
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/
const styles = StyleSheet.create({
  buttonLog: {
      alignSelf: 'stretch',
      backgroundColor: "#4d94ff",
      margin: 20,
      padding: 8,
      color: '#F5F5F5',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSign: {
      alignSelf: 'stretch',
      backgroundColor: '#ffda5c',
      margin: 20,
      padding: 8,
      color: '#ffffff',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  input: {
  //   width: 290,
  //   height: 45,
  //   backgroundColor: '#fff',
  //   margin: 15,
  //   padding: 12,
  //   color: 'black',
  //   borderRadius: 30,
  //   fontSize: 14,
  //   fontWeight: '400',
  //   borderColor: 'grey',
  //   borderWidth: 1.5
  // },
  // header: {
  //   flex: 3,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'white'
  // },
  // image: {
  //   aspectRatio: 0.9,
  //   resizeMode: 'contain',
  // },
  // otherInput: {
  //   flex: 4,
  //   alignItems: 'flex-start',
  //   alignItems: 'center',
  // },
      width: 290,
      height: 45,
      backgroundColor: '#fff',
      margin: 15,
      padding: 12,
      color: 'black',
      borderRadius: 30,
      fontSize: 14,
      fontWeight: '400',
      borderColor: 'grey',
      borderWidth: 1.5
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    body: {
      flex: 8,
      justifyContent: 'center'
    },
    container: {
      flex: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    miniInput: {
      flex: 1,
      alignItems: 'center',
    },
    otherInput: {
      flex: 2,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.9,
      resizeMode: 'contain',
    },
    image2: {
      aspectRatio: 0.2,
      resizeMode: 'contain',
    },
    logInInput: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    signInInput: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    blank: {
      flex: 2,
    }
});


export default PhoneVer;