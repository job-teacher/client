import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalProps} from '@components/modals/BaseModal/hooks/useBaseModal';
import TabNavigator, {ScreenType} from '@components/navigators/TabNavigator';
import {Ko} from '@constants/ko';
import LoginModal from '~/components/modals/LoginModal';

interface MyPageProps {
  modalProps: ModalProps;
  onHideModal: () => void;
  onNavigationPress: (type: ScreenType) => void;
}

const MyPageScreen = ({
  modalProps,
  onHideModal,
  onNavigationPress,
}: MyPageProps) => {
  return (
    <View style={styles.container}>
      <TabNavigator active={Ko.MyPage} onNavigationPress={onNavigationPress} />
      <LoginModal onHideModal={onHideModal} modalProps={modalProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default MyPageScreen;
