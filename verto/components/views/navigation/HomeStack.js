import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import TermsAndConditions from '../TermsOfService';
import SignLogIn from '../SignLogIn';
import EmailVer from '../EmailVerification';
import PhoneVer from '../PhoneVerification';
import Redirect from '../Redirect';
import DetailsScreen from '../DetailsScreen';
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
  PhoneVer: {
    screen: PhoneVer,
  },
  Redirect: {
    screen: Redirect,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
