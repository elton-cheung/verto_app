import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

class SignLogIn extends React.Component {
  //  Go to SignUpPage
  signUp = async () => {
    try {
      // here place your signup logic
      console.log('Next adding phone number!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  // Go to LoginPage
  logIn = async () => {
    try {
      // here place your login logic
      console.log('Next adding phone number!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
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

        <View style={styles.logInInput}>
          {/* <TouchableOpacity onPress={this.handlPress}>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity> */}
          <Button style={styles.buttonLog}
            title = "Log In"
            onPress={() => this.props.navigation.navigate('LogIn')}
          />

          {/* <TouchableHighlight
            style={styles.buttonLog}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <Text>Log In</Text>
          </TouchableHighlight> */}
        </View>

        <View style={styles.signInInput}>
          <Button style={styles.buttonSign}
            title = "Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>

        <View style={styles.blank}>
          {/* planning to use this space for something maybe? -Jennie */}
        </View>
      </View>
    );
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
    fontSize: 10,
    fontWeight: '500',
  },
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
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    aspectRatio: .9,
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

export default SignLogIn;
