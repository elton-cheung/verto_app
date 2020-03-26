import { createStackNavigator, SwitchNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import TermsAndConditions from './auth/TermsOfService';
import SignLogIn from './auth/SignLogIn'
import EmailVer from './auth/EmailVerification'
import PhoneVer from './auth/PhoneVerification'

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator({
        Terms: {
            screen: TermsAndConditions
        },
        SignLog: {
            screen: SignLogIn
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
    });
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
