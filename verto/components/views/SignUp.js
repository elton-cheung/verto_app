import React from 'react';
import {View, Button, TextInput, StyleSheet, Image, Text} from 'react-native';
import DatePicker from 'react-native-datepicker'
// import styles from './style/signUpFlowStyle.js';

class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    confpassword: '',
    currentdate: "",
    email:"",
    birthDate:"2016-05-15",
    error: 'Please enter all the fields'
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };


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
        //NO error, then proceed
        // console.log("Inside this")
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
              if (json.code == 'user_created') {
                // alert('1')
                const token = json.token
                const userId = json.user.user_id
                const secure = SecureStorage.setItem(userId, token, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
                this.props.navigation.navigate('EmailVer',  {token_user: userId, email:json.user.email} );
              } else if (json.code == 'email_exists') {
                alert('2')
                console.log(json.code)
                this.setState({error: 'This email is already used'});
                this.props.navigation.navigate('EmailVer', {email:"ethango@bu.edu"});
              }
              else if(json.code == 'chatkit_error'){
                alert('3')
                this.setState({error: 'Please enter a valid e-mail'})
              }
              else if(json.code == "edu_email_required"){
                alert('4')
                this.setState({error: 'Please enter an edu e-mail'})
              }
              else{
                alert('5')

              }
            });
        } catch {
          alert('An unexpected error occur please contact us!');
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
    },
    errorMessage:{
      color:'red'
    }
});

export default SignUp;
