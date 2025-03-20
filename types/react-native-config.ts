declare module 'react-native-config' {
  export interface NativeConfig {
    KAKAO_APP_KEY?: string;
    KAKAO_SCHEME?: string;
    NAVER_APP_NAME?: string;
    NAVER_Client_ID?: string;
    NAVER_Client_SECRET?: string;
    NAVER_SCHEME?: string;
    FACEBOOK_APP_ID?: string;
    FACEBOOK_CLIENT_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
