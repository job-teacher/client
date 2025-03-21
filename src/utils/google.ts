import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  webClientId: Config.GOOGLE_WEB_CLIENT_ID,
  scopes: ['email', 'profile'],
  offlineAccess: true,
  iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
});
