import {googleLogin, kakaoLogin, naverLogin} from '~/utils/socialLogin';
import {ModalProps} from '../../BaseModal/hooks/useBaseModal';
import {Alert} from 'react-native';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

export const useLoginModal = (modal: ModalProps) => {
  const onLoginHandler = async (loginType: LoginType) => {
    switch (loginType) {
      case 'kakao':
        const kakaoToken = await kakaoLogin();

        console.log('kakaoToken', kakaoToken);
        break;

      case 'naver':
        const naverToken = await naverLogin();

        console.log('naverToken', naverToken);
        break;

      case 'google':
        const googleToken = await googleLogin();

        console.log('googleToken', googleToken);
        break;

      case 'apple':
        // const appleToken = await appleLogin();

        // console.log('appleToken', appleToken);
        // 애플 개발자 계정 필요함으로 추후 추가 예정
        Alert.alert('현재 지원하지 않습니다.');
        break;

      default:
        break;
    }

    modal.hideModal();
  };

  return {onLoginHandler};
};
