import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Link } from 'react-native';
import SignUp from './SignUp'
import TermsAndConditions from './TermsOfService'
import EmailVer from './EmailVerification'
import PhoneVer from './PhoneVerification'
import SignLogIn from './SignLogIn'

// Style part of this apge
const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 50,
  },
  heading: {
    fontSize: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 12,
    marginBottom: 12
  },
});

export default class Terms extends Component {
  // state to identify whether a user has accepted the terms of service
  state = {
    accepted: true
  }

  onPress = () => {
    this.setState({
      accepted: true
    })
  }

  render() {
    let acceptedTerms = this.state.accepted;
    if(!acceptedTerms){
      return (
        <TermsAndConditions></TermsAndConditions>
      );
    }
    else{
      return(
        <SignLogIn></SignLogIn>
      );
    }

  }
}


