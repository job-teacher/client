import {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import {screenName} from '@constants/screenName';
import {useBackButtonForExit} from '@hooks/useBackButtonForExit';
import {useNavigationFn} from '@hooks/useNavigationFn';
import {useCallback, useEffect} from 'react';
import {useBaseModal} from '~/components/modals/BaseModal/hooks/useBaseModal';
import useUserStore from '~/stores/users';

const useMyPage = () => {
  const navigation = useNavigationFn<screenName.MyPage>();
  const {user, setUser} = useUserStore();
  const modal = useBaseModal();

  useBackButtonForExit();

  const onNavigationHandler = (screen: ScreenType) => {
    switch (screen) {
      case Ko.Home:
        return navigation.push(screenName.Home);
      case Ko.WishJob:
        return navigation.push(screenName.WishJob);
      default:
        break;
    }
    return;
  };

  const onHideModal = useCallback(() => {
    navigation.goBack();
  }, []);

  useEffect(() => {
    if (!user.id) {
      modal.showModal();
    }
  }, []);

  return {modal, onHideModal, onNavigationHandler};
};

export default useMyPage;
