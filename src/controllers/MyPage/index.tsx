import MyPageScreen from '@screens/MyPage';
import useMyPage from './hooks/useMyPage';

const MyPageController = () => {
  const {onNavigationHandler, onLoginHandler, modal} = useMyPage();

  return (
    <MyPageScreen
      onNavigationPress={onNavigationHandler}
      onLoginModal={onLoginHandler}
      modalProps={modal}
    />
  );
};

export default MyPageController;
