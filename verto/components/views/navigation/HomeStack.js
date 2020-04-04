import {createStackNavigator} from 'react-navigation-stack';
// NavigationActions is super critical
import {createAppContainer} from 'react-navigation';

import SignUp from '../SignUp';
import LogIn from '../LogIn';
import TermsAndConditions from '../TermsOfService';
import SignLogIn from '../SignLogIn';
import EmailVer from '../EmailVerification';
import PhoneVer from '../PhoneVerification';
import Verto from '../Redirect';
import DetailsScreen from '../DetailsScreen';
import EmailResend from '../EmailResend'
import EmailConfirmed from '../EmailConfirmed'

import PhoneResend from '../PhoneResend'
import PhoneConfirmed from '../PhoneConfirmed'
import PhoneInput from '../PhoneInput'
import {SplashScreen} from '../SplashScreen';

const screens = {
  Terms: {
    screen: TermsAndConditions,
  },
  SignLog: {
    screen: SignLogIn,
  },
  SignUp: {
    screen: SignUp,
  },
  LogIn: {
    screen: LogIn,
  },
  EmailVer: {
    screen: EmailVer,
  },
  EmailResend: {
    screen: EmailResend
  },
  EmailConfirmed: {
    screen: EmailConfirmed
  },
  PhoneInput: {
    screen: PhoneInput
  },
  PhoneVer: {
    screen: PhoneVer,
  },
  PhoneResend: {
    screen: PhoneResend
  },
  PhoneConfirmed: {
    screen: PhoneConfirmed
  },
  Verto: {
    screen: Verto,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
