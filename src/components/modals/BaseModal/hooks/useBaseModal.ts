import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {BackHandler} from 'react-native';

export interface ModalProps {
  modalShowing: boolean;
  showModal(): void;
  hideModal(): void;
}

export const useBaseModal = (): ModalProps => {
  const [modalShowing, setIsShowing] = useState(false);

  const showModal = useCallback(() => {
    if (!modalShowing) {
      setIsShowing(true);
    }
  }, [modalShowing]);

  const hideModal = useCallback(() => {
    if (modalShowing) {
      setIsShowing(false);
    }
  }, [modalShowing]);

  const onPressBackButton = () => {
    hideModal();

    return true;
  };

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onPressBackButton,
    );

    return () => backHandler.remove();
  });

  const modalProps = {modalShowing, showModal, hideModal};

  return modalProps;
};
