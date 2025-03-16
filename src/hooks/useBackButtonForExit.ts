import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {Ko} from '@constants/ko';

export const useBackButtonForExit = () => {
  const [preBackTime, setPreBackTime] = useState<number>(Date.now());

  const backAction = useCallback(() => {
    ToastAndroid.show(Ko.BackButtonToast, 2);

    const nowTime = Date.now();

    if (nowTime - preBackTime < 1000) {
      BackHandler.exitApp();
    } else {
      setPreBackTime(nowTime);
    }

    return true;
  }, [preBackTime]);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });
};
