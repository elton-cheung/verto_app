import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import TermsAndConditions from '../TermsOfService';
import SignLogIn from '../SignLogIn';
import EmailVer from '../EmailVerification';
import PhoneVer from '../PhoneVerification';
import PhoneInput from '../PhoneInput';
import ForgotPswrd from '../ForgotPswrd';
import Verto from '../Redirect';
import DetailsScreen from '../DetailsScreen';
import {SplashScreen} from '../SplashScreen';
import Onboard from '../Onboard';

const screens = {
  Terms: {
    screen: TermsAndConditions,
  },
  Onboard: {
    screen: Onboard,
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
  Forgot: {
    screen: ForgotPswrd,
  },
  EmailVer: {
    screen: EmailVer,
  },
  PhoneInput: {
    screen: PhoneInput,
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
