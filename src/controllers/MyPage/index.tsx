import MyPageScreen from '~/screens/MyPage';
import useMyPage from './hooks/useMyPage';

const MyPageController = () => {
  const {onNavigationHandler} = useMyPage();

  return <MyPageScreen onNavigationPress={onNavigationHandler} />;
};

export default MyPageController;
