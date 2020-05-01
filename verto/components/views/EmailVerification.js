/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

// import styles from './style/signUpFlowStyle.js';

class EmailVer extends React.Component {
  state = {
    email: this.props.navigation.getParam('email'),
    value: '',
    userId:this.props.navigation.getParam('token_user'),
  };

/* Send the verification E-mail before we render the page
Authorization is the bearer token, we first have to retrieve it through SecureStorage (A promise),
Use that promise to send a POST request to Verto's API
Then if response == "Email Sent", we notify the users that the email is sent
Otherwise, there are many possible problem:
1. It could be a bug in the body JSON that we are sending
2. The auth token could be wrong

NOTE: THE API takes a while to send the code
Sometimes the API doesn't respond -> so try using Postman first
Expects Bearer token and  a body of {"email" : "youremail@something.edu"}
*/
  componentWillMount(){
    try{
      let data = new Object();
      data["email"] = this.state.email
      SecureStorage.getItem(this.state.userId, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
      .then(response => fetch('https://api.vertostore.com/account/email-update', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + response
        },

        body: JSON.stringify(data),
      }))
            .then(response => response.json())
            .then(json => {
              if (json.message == 'Email sent') {
                alert('An email has been sent to your .edu email')
              }
              else{
                alert('An error has occured, please contact us!');
              }
            });
          }
          catch{
              alert('An error has occured, please contact us!')
          }        
}
/*
  Resend code is the same function as above, this is triggered when the user press the resend code button
  Similar logic to above, except now we do it after render
*/
async resendCode(){
  try{
    let data = new Object();
    data["email"] = this.state.email
    SecureStorage.getItem(this.state.userId, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
    .then(response => fetch('https://api.vertostore.com/account/email-update', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + response
        },
        body: JSON.stringify(data),
      }))
      .then(response => response.json())
            .then(json => {
              if (json.message == 'Email sent') {
                alert('An email has been sent to your .edu email')
              }
              else{
                alert('An error has occured, please contact us!');
              }
            });
  }
  catch{
    alert('An error has occured, please contact us!');
  }
}

 /* 
 After e-mail verification, we need to set up phone verification, 
 The authorization key is retrieved using secure storage, similar to how we post the send email request
 The API docs requires email and code that was sent.
*/
async verification(){
  try{
    let data = new Object();
    data["email"] = this.state.email;
    SecureStorage.getItem(this.state.userId, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
    .then(response => fetch('https://api.vertostore.com/account/email-update/' + this.state.value, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + response 
          },
          body: JSON.stringify(data),
        }))
          .then(response => response.json())
          .then(json => {
            if (json.code == 'verified_email') {
              this.props.navigation.navigate('PhoneInput',  {token_user: this.state.userId} );
            }
            if(json.code == 'failed_verification'){
              alert('The code you entered was incorrect')
            } 
            if(json.message == 'Auth failed'){
              console.log('Authorization failed')
            }
          });
        }
        catch{
          alert('An error has occured, please contact us!');
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
          <Text style={{textAlign: 'center', fontSize: 15}}>An E-mail has been sent</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>to your .edu email</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Please enter the 7-digit code</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>below to verify your e-mail</Text> 
          <TextInput
          textAlign={'center'}
            style={styles.input}
            placeholder="7 Digit"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder={this.state.errorMessage}
            placeholderTextColor="red"
            onChangeText={value => this.setState({value})}
            maxLength={7}
            errorStyle={{ color: 'red' }}
            errorMessage='The code you entered is incorrect'
          />

        </View>

        <View style={styles.otherInput}>
        <Button
            title="Confirm Code"
            onPress={this.verification.bind(this)}
          />
          <Button
            title="Resend Code"
            onPress={this.resendCode.bind(this)}
          />
        </View>
      </View>
    );
  }
}

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
      aspectRatio: 0.4,
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



export default EmailVer;
