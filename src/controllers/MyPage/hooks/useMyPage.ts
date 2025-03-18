import {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import {screenName} from '@constants/screenName';
import {useBackButtonForExit} from '@hooks/useBackButtonForExit';
import {useNavigationFn} from '@hooks/useNavigationFn';
import {useBaseModal} from '~/components/modals/BaseModal/hooks/useBaseModal';

const useMyPage = () => {
  const navigation = useNavigationFn<screenName.MyPage>();
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

  const onLoginHandler = () => {
    modal.showModal();
  };

  return {onNavigationHandler, modal, onLoginHandler};
};

export default useMyPage;
