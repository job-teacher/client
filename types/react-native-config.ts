declare module 'react-native-config' {
  export interface NativeConfig {
    KAKAO_APP_KEY?: string;
    KAKAO_SCHEME?: string;
    NAVER_CONSUMER_KEY?: string;
    NAVER_CONSUMER_SECRET?: string;
    NAVER_APP_NAME?: string;
    NAVER_CUSTOM_URL?: string;
    FACEBOOK_APP_ID?: string;
    FACEBOOK_CLIENT_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
