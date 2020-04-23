import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
// import DatePicker from 'react-native-datepicker'
// import styles from './style/signUpFlowStyle.js';

class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    confpassword: '',
    currentdate: "",
    birthDate:"2016-05-15",
    error: 'error message goes here (To be removed)'
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  signUp = async () => {
    const {firstname, lastname, password, confpassword} = this.state;
    try {
      // here place your signup logic
      console.log('Now to verifying email ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  completeSign() {
    // this.signUp();
    this.props.navigation.navigate('EmailVer');
  }



calculateAge(birth_date) {
    var ageDif = Date.now() - birth_date.getTime();
    var ageDate = new Date(ageDif); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  async verification(){
    let data = {
      "email":"test-juan2@bu.edu", 
      "firstName": "Test",
      "lastName": "Juan2", 
      "password":"TestJuan2",
      "dob": {
        "day": "11",
        "month": "08",
        "year": "1997"
      }
    }
  
    // let age = this.calculateAge(this.state.date)
    let age = 14
    // alert(age)
    if(age > 13){
      try{
        await fetch('https://api.vertostore.com/account/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response => response.json())
        .then(json => {
        if(json.code == "user_created"){
          console.log(json.code)
              this.props.navigation.navigate('EmailVer')
          }
          else if(json.code == "email_exists"){
              this.setState({error: 'This email is already used'} )
          }
        });

        // response is an object
        // let temp = response.json()
        // console.log(temp._55);
        // console.log(temp);
        // if(response.json()._55.code == "authorized"){
        //   alert('hi')
        //       this.props.navigation.navigate('EmailVer')
        // }
        // this.props.navigation.navigate('EmailVer');
        

      }
      catch{
        alert('error error error')
      }
    }
    else{
      this.setState({error: 'You need to be at least 13 years old'})
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

        <View style={styles.otherInput}>
    <Text>{this.state.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('firstname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('lastname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder=".edu E-mail"
            // secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />
          <Text>Date of Birth</Text>
          {/* <DatePicker
          style={{width: 200}}
          date={this.state.birthDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({birthDate: date})}}
        /> */}


          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <Button
            title="Add E-mail"
            onPress={this.verification.bind(this)}
          />
        </View>
      </View>
    );
  }
}

/*
  TODO: Implement a function to adjust text size upon typing

*/
const styles =StyleSheet.create({
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
      flex: 2,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      aspectRatio: 0.9,
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

export default SignUp;
