import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'; 
import SignUp from '../SignUp'
import Login from '../Login'
import TermsAndConditions from '../TermsOfService';
import SignLogIn from '../SignLogIn'
import EmailVer from '../EmailVerification'
import PhoneVer from '../PhoneVerification'

const screens = {
    Terms: {
        screen: TermsAndConditions
    },
    SignLog:{
        screen:SignLogIn
    },
    SignUp: {
        screen: SignUp
    },
    LogIn: {
        screen: Login
    },
    EmailVer: {
        screen: EmailVer
    },
    PhoneVer: {
        screen: PhoneVer
    }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
