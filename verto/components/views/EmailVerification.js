/* eslint-disable no-undef */
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import { Icon } from 'react-native-elements';
// import styles from './style/signUpFlowStyle.js';

class EmailVer extends React.Component {
  state = {
    userId: '',
    email: this.props.navigation.getParam('email')
  };
  // Call the Email Verification API


  componentWillMount(){
    this.setState({
      email: this.props.email
    });
    try{
    fetch('https://api.vertostore.com/account/email-update', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(json => {
              if (json.code == 'user_created') {
                // alert('1')
                const token = json.token
                const userId = json.user.user_id
                const secure = SecureStorage.setItem(userId, token, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
                this.props.navigation.navigate('EmailVer',  {token_user: userId} );
              } else if (json.code == 'email_exists') {
                // alert('2')
                console.log(json.code)
                this.setState({error: 'This email is already used'});
                this.props.navigation.navigate('EmailVer');
              }
              else if(json.code == 'chatkit_error'){
                // alert('3')
                this.setState({error: 'Please enter a valid e-mail'})
              }
              else if(json.code == "edu_email_required"){
                // alert('4')
                this.setState({error: 'Please enter an edu e-mail'})
              }
              else{
                alert('An unexpected error occur please contact us!')
              }
            });
          }
          catch{

          }        
}

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
    <Text>{this.state.email}</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>An E-mail has been sent</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>to your .edu email</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Please enter the 6-digit code</Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>below to verify your e-mail</Text> 
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
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
          />

        </View>

        <View style={styles.otherInput}>
        <Button
            title="Confirm Code"
            onPress={() => this.state.error ? this.setState({errorMessage: "Incorrect Code"}) : alert("Nice")}
          />
          <Button
            title="Resend Code"
            onPress={() => this.props.navigation.navigate('PhoneInput')}
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
