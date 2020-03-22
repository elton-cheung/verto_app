//AuthNavigation.js
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../authentic/Login'
import SignUp from '../authentic/SignUp'
import SignLogIn from '../authentic/SignLogIn'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: SignUp }
  },
  {
    initialRouteName: 'Login'
    headerMode: 'none'
  }
)

const styles = StyleSheet.create({
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
    resizeMode: 'contain'
  }
})


export default AuthNavigation
