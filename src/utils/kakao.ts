import {initializeKakaoSDK} from '@react-native-kakao/core';
import Config from 'react-native-config';

initializeKakaoSDK(Config.KAKAO_APP_KEY ?? '');
