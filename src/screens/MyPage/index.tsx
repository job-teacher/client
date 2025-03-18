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
import BaseModal from '~/components/modals/BaseModal';

interface MyPageProps {
  onLoginModal: () => void;
  modalProps: ModalProps;
  onNavigationPress: (type: ScreenType) => void;
}

const MyPageScreen = ({
  onLoginModal,
  modalProps,
  onNavigationPress,
}: MyPageProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLoginModal}>
        <Text>{'모달 띄우기'}</Text>
      </TouchableOpacity>
      <TabNavigator active={Ko.MyPage} onNavigationPress={onNavigationPress} />
      <BaseModal content={<View></View>} modalProps={modalProps} />
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
