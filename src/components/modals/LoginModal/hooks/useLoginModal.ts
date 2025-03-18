import {ModalProps} from '../../BaseModal/hooks/useBaseModal';

type LoginType = 'kakao' | 'naver' | 'facebook' | 'apple';

export const useLoginModal = (modal: ModalProps) => {
  const onLoginHandler = async (loginType: LoginType) => {
    let token: string | null = null;

    switch (loginType) {
      case 'kakao':
        console.log(`${loginType}으로 로그인`);
        break;

      case 'naver':
        console.log(`${loginType}으로 로그인`);
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
