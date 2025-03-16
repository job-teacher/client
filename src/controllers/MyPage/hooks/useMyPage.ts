import {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import {screenName} from '@constants/screenName';
import {useBackButtonForExit} from '@hooks/useBackButtonForExit';
import {useNavigationFn} from '@hooks/useNavigationFn';

const useMyPage = () => {
  const navigation = useNavigationFn<screenName.MyPage>();
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

  return {onNavigationHandler};
};

export default useMyPage;
