import {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import {screenName} from '@constants/screenName';
import {useBackButtonForExit} from '@hooks/useBackButtonForExit';
import {useNavigationFn} from '@hooks/useNavigationFn';

const useHome = () => {
  const navigation = useNavigationFn<screenName.Home>();
  useBackButtonForExit();

  const onNavigationHandler = (screen: ScreenType) => {
    switch (screen) {
      case Ko.WishJob:
        return navigation.push(screenName.WishJob);
      case Ko.MyPage:
        return navigation.push(screenName.MyPage);
      default:
        return;
    }
  };

  return {onNavigationHandler};
};

export default useHome;
