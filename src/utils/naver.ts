import NaverLogin from '@react-native-seoul/naver-login';
import Config from 'react-native-config';

NaverLogin.initialize({
  appName: Config.NAVER_APP_NAME ?? '',
  consumerKey: Config.NAVER_Client_ID ?? '',
  consumerSecret: Config.NAVER_Client_SECRET ?? '',
  serviceUrlSchemeIOS: Config.NAVER_SCHEME,
});
