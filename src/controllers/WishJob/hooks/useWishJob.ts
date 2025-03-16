import {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import {screenName} from '@constants/screenName';
import {useBackButtonForExit} from '@hooks/useBackButtonForExit';
import {useNavigationFn} from '@hooks/useNavigationFn';

const useWishJob = () => {
  const navigation = useNavigationFn<screenName.WishJob>();
  useBackButtonForExit();

  const onNavigationHandler = (screen: ScreenType) => {
    switch (screen) {
      case Ko.Home:
        return navigation.push(screenName.Home);
      case Ko.MyPage:
        return navigation.push(screenName.MyPage);
      default:
        break;
    }
    return;
  };

  return {onNavigationHandler};
};

export default useWishJob;
