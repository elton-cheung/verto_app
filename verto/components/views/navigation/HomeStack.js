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
  Verto: {
    screen: Verto,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
