import {ReactElement} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalProps} from './hooks/useBaseModal';
import {Colors} from '~/constants/theme';
import {scaledHeight, scaledModerate, scaledWidth} from '~/utils/scale';
import LinearGradient from 'react-native-linear-gradient';

interface BaseModalProps {
  modalHeight?: number;
  onHideModal?: () => void;
  content: ReactElement;
  modalProps: ModalProps;
}

const fullWidth = Dimensions.get('screen').width;
const fullHeight = Dimensions.get('window').height;

const PHONE_MAX_WIDTH = 430;
const TABLET_DEVICE = 480;

const BaseModal = ({
  modalHeight = 400,
  onHideModal,
  content,
  modalProps,
}: BaseModalProps) => {
  const onHideView = () => {
    modalProps.hideModal();
  };

  return (
    <Modal
      animationType={'slide'}
      transparent
      style={styles.container}
      visible={modalProps.modalShowing}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.4}}
        colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.5)']}
        style={styles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onHideModal ?? onHideView}
          style={styles.overlay}
        />
      </LinearGradient>
      <View
        style={[
          styles.modal,
          {
            height: modalHeight,
            marginLeft: (-fullWidth * 0.9) / 2,
            marginTop: -(modalHeight / 2),
          },
        ]}>
        {content}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  overlay: {
    width: '100%',
    height: fullHeight,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    backgroundColor: Colors.WHITE,
    borderRadius: scaledModerate(20),
    paddingTop: scaledHeight(15),
    paddingHorizontal: scaledWidth(8),
    alignSelf: 'center',
    transform:
      fullWidth > TABLET_DEVICE
        ? [{scale: PHONE_MAX_WIDTH / fullWidth}]
        : undefined,
  },
});

export default BaseModal;
