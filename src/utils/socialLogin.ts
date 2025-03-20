import {KakaoLoginToken, login} from '@react-native-kakao/user';

export const kakaoLogin = async () => {
  try {
    const token: KakaoLoginToken = await login();

    return JSON.stringify(token.accessToken);
  } catch (error) {
    console.log('error:', error);

    return null;
  }
};
