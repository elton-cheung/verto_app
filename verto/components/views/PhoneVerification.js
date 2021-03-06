/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text, Linking} from 'react-native';
import { Icon } from 'react-native-elements';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

// import styles from './style/signUpFlowStyle.js';

class PhoneVer extends React.Component {
  state = {
    phone:this.props.navigation.getParam('phone'),
    code:'',
    errorMessage: 'Enter Code Here',
    error: true
  };
  

  /*
  PhoneInput and PhoneVerification is unchecked as of April 30 2020, please test out the API, similar logic
  Be careful, the body data needs the code to be extracted
  */
  

  async verifyPhone(){
    try{
      let data = new Object();
        data["phone"] = this.state.phone
        data["code"] = this.state.code
        SecureStorage.getItem(this.state.userId, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
        .then(response => fetch('https://api.vertostore.com/account/code-verification/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + response
          },
          body: JSON.stringify(data),
        }))
              .then(response => {
                if(response.status == 200){
                  this.props.navigation.navigate('PhoneVer', {token_user: this.state.userId, phone:this.state.phone})
                }
              });
            }
            catch{
                console.log('An error has occured, please contact us!')
            }     
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
            onChangeText={code => this.setState({code})}
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
      onPress={this.verifyPhone.bind(this)}>
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