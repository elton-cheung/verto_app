
import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text, Linking} from 'react-native';
import { Icon } from 'react-native-elements';
// import styles from './style/signUpFlowStyle.js';

class ForgotPswrd extends React.Component {
  state = {
    email: '',
    confemail: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../assets/images/verto_logo.png')}
          />
        </View>
        <View style={styles.container}>
            <Text style={styles.information}>Set new Password for your account</Text>
            <Text style={{flexDirection: 'column',textAlign: 'center', width: 300, fontSize: 15}}>If you would like to reset your password, enter your email address below and follow the steps in the email:</Text>

            <TextInput
                textAlign={'center'}
                style={styles.input}
                placeholder="Enter Email Address"
                autoCapitalize="none"
                placeholderTextColor="grey"
                onChangeText={val => this.onChangeText('email', val)}
                maxLength={50}
            />
            <Button
                title="Reset Password"
                onPress={() => this.props.navigation.navigate('LogIn')}
            />
            <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate('LogIn')}> Cancel </Text>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
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
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    otherInput: {
      flex: 2,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.8,
      resizeMode: 'contain',
    },
    information: {
      flexDirection: 'column',
      color: 'blue', fontWeight: 'bold', textAlign: 'center', fontSize: 20,
    },

});


export default ForgotPswrd;