import MyPageScreen from '@screens/MyPage';
import useMyPage from './hooks/useMyPage';

const MyPageController = () => {
  const {onHideModal, onNavigationHandler, modal} = useMyPage();

  return (
    <MyPageScreen
      onHideModal={onHideModal}
      onNavigationPress={onNavigationHandler}
      modalProps={modal}
    />
  );
};

export default MyPageController;
