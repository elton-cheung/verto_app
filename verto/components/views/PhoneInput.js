/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

// import styles from './style/signUpFlowStyle.js';

class PhoneInput extends React.Component {
  state = {
    phone: '',
    message: 'Enter Phone Number',
    userId:this.props.navigation.getParam('token_user'),
  };


  // After e-mail verification, we need to set up phone verification

  async sendPhone(){
    try{
    let data = new Object();
      data["phone_number"] = this.state.phone
      SecureStorage.getItem(this.state.userId, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
      .then(response => fetch('https://api.vertostore.com/account/start-phone-verification', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + response
        },
        body: JSON.stringify(data),
      }))
            .then(response => console.log(response))
            .then(json => {
              if (json.message == 'Email sent') {
                // alert('1')
                console.log('email has been sent')
              }
              else{
                console.log('An error has occured, please contact us!');
              }
            });
          }
          catch{
              console.log('An error has occured, please contact us!')
          }      
  }

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
          <Text style={{textAlign: 'center', fontSize: 20}}>Phone Number Verification</Text>

          <TextInput
          textAlign={'center'}
            style={styles.input}
            placeholder={this.state.message}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={phone => this.setState({phone})}
          />

        </View>

        <View style={styles.otherInput}>
          <Button
            title="Send Verification Code"
            onPress={this.sendPhone.bind(this)}
          />
          <Button
            title="Skip Phone Verification"
            onPress={() => this.props.navigation.navigate('Onboard')}
          />
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    body: {
      flex: 4,
      justifyContent: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    otherInput: {
      flex: 1,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.9,
      resizeMode: 'contain',
    },
    image2: {
      aspectRatio: 0.45,
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


export default PhoneInput;