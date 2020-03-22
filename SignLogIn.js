
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
Text
} from 'react-native'

class SignLogIn extends React.Component {


  //  Go to SignUpPage
  signUp = async () => {
    try {
      // here place your signup logic
      console.log('Next adding phone number!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  // Go to LoginPage
  logIn = async () => {
    try {
      // here place your login logic
      console.log('Next adding phone number!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image
        style={styles.image}
        source={require('./verto_logo.png')}
      />
        </View>

    <View style={styles.logInInput}>
    <TouchableHighlight style={styles.buttonLog} onPress={ ()=>alert("Pressed LogIn")  }>
                    <Text>Log In</Text>
    </TouchableHighlight>
    </View>

    <View style={styles.signInInput}>
    <TouchableHighlight style={styles.buttonSign} onPress={ ()=>alert("Pressed Signup")  }> 
                    <Text>Sign Up</Text>
    </TouchableHighlight>
    </View >

      </View>
    )
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#42A5F5',
    margin: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  buttonLog: {
    alignSelf: 'stretch',
    backgroundColor: '#42A5F5',
    margin: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    height:300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
 },
 buttonSign: {
    alignSelf: 'stretch',
    backgroundColor: 'pink',
    margin: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    height:300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
 },
  header:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    aspectRatio: 0.8, 
    resizeMode: 'contain',

  }
  , logInInput : {
    flex: 4,
    backgroundColor: 'steelblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch'
    
  },
  signInInput : {
    flex: 4,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch'
    
  }
})

export default SignLogIn;