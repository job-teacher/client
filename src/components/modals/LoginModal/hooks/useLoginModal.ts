import {kakaoLogin, naverLogin} from '~/utils/socialLogin';
import {ModalProps} from '../../BaseModal/hooks/useBaseModal';

type LoginType = 'kakao' | 'naver' | 'facebook' | 'apple';

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

      case 'facebook':
        console.log(`${loginType}으로 로그인`);
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
