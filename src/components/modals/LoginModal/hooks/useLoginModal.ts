import {googleLogin, kakaoLogin, naverLogin} from '~/utils/socialLogin';
import {ModalProps} from '../../BaseModal/hooks/useBaseModal';

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
        console.log(`${loginType}으로 로그인`);
        break;

      default:
        break;
    }

    modal.hideModal();
  };

  return {onLoginHandler};
};
