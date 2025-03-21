import {GoogleSignin} from '@react-native-google-signin/google-signin';
import kakao, {KakaoLoginToken} from '@react-native-kakao/user';
import naver from '@react-native-seoul/naver-login';

export const kakaoLogin = async (): Promise<string | null> => {
  try {
    const token: KakaoLoginToken = await kakao.login();

    return JSON.stringify(token.accessToken);
  } catch (error) {
    console.log('kakao login error:', error);

    return null;
  }
};

export const naverLogin = async (): Promise<string | null> => {
  try {
    const {isSuccess, failureResponse, successResponse} = await naver.login();

    if (isSuccess && successResponse) {
      return successResponse.accessToken;
    } else {
      console.log('naver login Error', failureResponse?.message);

      return null;
    }
  } catch (error) {
    return null;
  }
};

export const googleLogin = async (): Promise<string | null> => {
  try {
    const result = await GoogleSignin.signIn();

    if (result.type === 'success') {
      return result.data?.idToken;
    } else {
      console.log('google login cancelled');
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
