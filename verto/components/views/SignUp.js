import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import DatePicker from 'react-native-datepicker'
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

// import styles from './style/signUpFlowStyle.js';
/*
 Datepicker is deprecated and should be replaced with a better library, but it's used here for now
  because of time constraint. Datepicker is also not great because some of the dates are hard coded
*/
class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    confpassword: '',
    currentdate: '',
    email:'',
    birthDate:"2016-05-15",
    error: 'Please enter all the fields'
  };

/*
  Function to calculate age
  Input: String (yyyymmdd)
  Output: A number to determine age
  Credit: Francisc
  Title: Calculate age given the birth date in the format YYYYMMDD
  Date: October 30 2010
  Link: https://meta.stackoverflow.com/questions/316496/citation-for-linking-to-answers
  License: License "CC BY" is linked to license deed.
*/
calculateAge(birth_date) {
  var year = Number(birth_date.substring(0, 4));
  var month = Number(birth_date.substring(4, 2)) - 1;
  var day = Number(birth_date.substring(6, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
  }
  return age
}

/*
  Verification using the API
  Sends a POST request, if the email_exist, we will notify the user
  Currently, we are checking for simple test case 
  (if password is not the same, age and making sure they enter all the input fields)
  In the future, it would be great to use a better library for organization if there is away to do so
*/
  async verification(){
    let birth = new Object();
    birth["day"] = this.state.birthDate.substring(8,10)
    birth["month"] = this.state.birthDate.substring(5,7)
    birth["year"] = this.state.birthDate.substring(0,4)
    let data = new Object();
    data["email"] = this.state.email
    data["firstName"] = this.state.firstname
    data["lastName"] = this.state.lastname
    data["password"] = this.state.password
    data["dob"] = birth

    let age = this.calculateAge(this.state.birthDate)
    //Using if statement to see whether an error occurs, if exist, then DO NOT DO ANYTHING AND emit error
    if(this.state.firstname.length <= 0 || this.state.lastname.length <= 0 
      || this.state.password.length <= 0 || this.state.confpassword.length <= 0 
      || this.state.email.length <= 0){
        this.setState({error: "You must fill in all the fields"})
      }
      else if(this.state.password != this.state.confpassword){
        this.setState({error: "Your passwod must be the same"})
      }
      else if(age < 13){
        this.setState({error: "You must be at least 13 years old to use this service"})
      }
      else{
        //No input fields error, then proceed
        try {
          await fetch('https://api.vertostore.com/account/signup', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(json => {
              let emailSend = this.state.email;
              console.log(json);
              if (json.code == 'user_created') {
                const token = json.token
                const userId = json.user.user_id
                const secure = SecureStorage.setItem(userId, token, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
                this.props.navigation.navigate('EmailVer',  {token_user: userId, email:json.user.email} );
              } else if (json.code == 'email_exists') {
                this.setState({error: 'This email is already used'});
              }
              else if(json.code == 'chatkit_error'){
                this.setState({error: 'Please enter a valid e-mail'})
              }
              else if(json.code == "edu_email_required"){
                this.setState({error: 'Please enter an edu e-mail'})
              }
              else{
                alert('An error has occured, please contact us!');
              }
            });
        } catch {
          alert('An error has occured, please contact us!');
        }
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
    <Text style={styles.errorMessage}>{this.state.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={firstname => this.setState({firstname})}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={lastname => this.setState({lastname})}
          />
          <TextInput
            style={styles.input}
            placeholder=".edu E-mail"
            // secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={email => this.setState({email})}
          />
          <Text>Date of Birth</Text>
          <DatePicker
          style={{width: 200}}
          date={this.state.birthDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1920-05-01"
          maxDate="2020-04-01"
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
        />


          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={password => this.setState({password})}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="grey"
            onChangeText={confpassword => this.setState({confpassword})}
          />

          <Button
            title="Verify E-mail"
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
    },
    errorMessage:{
      color:'red'
    }
});

export default SignUp;
