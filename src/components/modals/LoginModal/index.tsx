import {Platform, StyleSheet, Text, View} from 'react-native';
import BaseModal from '../BaseModal';
import {ModalProps} from '../BaseModal/hooks/useBaseModal';
import FastImage from '@d11/react-native-fast-image';
import {Ko} from '~/constants/ko';
import {Images} from '~/constants/images';
import {useLoginModal} from './hooks/useLoginModal';
import {scaledHeight, scaledModerate} from '~/utils/scale';
import {useCallback} from 'react';
import {Colors} from '~/constants/theme';
import ThrottleButton from '~/components/buttons/ThrottleButton';

interface LoginModalProps {
  modalProps: ModalProps;
}

const LoginModal = ({modalProps}: LoginModalProps) => {
  const {onLoginHandler} = useLoginModal(modalProps);

  const btnStyles = useCallback((loginType: LoginType) => {
    switch (loginType) {
      case 'kakao':
        return {
          backgroundColor: '#FFEB00', // 카카오 디자인 가이드
        };
      case 'naver':
        return {
          backgroundColor: Colors.WHITE,
        };
      case 'google':
        return {
          backgroundColor: Colors.WHITE,
        };
      case 'apple':
        return {
          backgroundColor: Colors.WHITE,
        };
    }
  }, []);

  return (
    <BaseModal
      content={
        <View style={styles.container}>
          <Text style={styles.title}>{Ko.WithTeacher}</Text>
          <ThrottleButton
            style={[styles.loginBtn, btnStyles('kakao')]}
            onPress={() => onLoginHandler('kakao')}>
            <FastImage
              style={styles.icon}
              source={Images.KakaoIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.text}>{Ko.LoginWithKakao}</Text>
          </ThrottleButton>
          <ThrottleButton
            style={[styles.loginBtn, btnStyles('naver')]}
            onPress={() => onLoginHandler('naver')}>
            <FastImage
              style={styles.icon}
              source={Images.NaverIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.text}>{Ko.LoginWithNaver}</Text>
          </ThrottleButton>
          <ThrottleButton
            style={[styles.loginBtn, btnStyles('google')]}
            onPress={() => onLoginHandler('google')}>
            <FastImage
              style={styles.icon}
              source={Images.GoogleIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.text}>{Ko.LoginWithGoogle}</Text>
          </ThrottleButton>
          {Platform.OS === 'ios' && (
            <ThrottleButton
              style={[styles.loginBtn, btnStyles('apple')]}
              onPress={() => onLoginHandler('apple')}>
              <FastImage
                tintColor={Colors.BLACK}
                style={styles.icon}
                source={Images.AppleIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.text}>{Ko.LoginWithApple}</Text>
            </ThrottleButton>
          )}
        </View>
      }
      modalProps={modalProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: scaledModerate(32),
    fontWeight: 'bold',
    marginBottom: scaledHeight(12),
  },
  loginBtn: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    gap: 8,
  },
  icon: {
    width: scaledModerate(16),
    height: scaledModerate(14),
  },
  text: {
    fontSize: scaledModerate(16),
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
});

export default LoginModal;
