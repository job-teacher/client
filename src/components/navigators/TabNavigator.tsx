import React, {useCallback} from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import {Images} from '@constants/images';
import {Ko} from '@constants/ko';
import {Colors} from '@constants/theme';
import {scaledHeight, scaledModerate} from '~/utils/scale';

export type ScreenType = Ko.Home | Ko.WishJob | Ko.MyPage;

interface TabNavigatorProps {
  active: ScreenType;
  onNavigationPress: (type: ScreenType) => void;
}

const TabNavigator = ({active, onNavigationPress}: TabNavigatorProps) => {
  const activeText = useCallback(
    (type: ScreenType): StyleProp<TextStyle> => {
      if (type === active) {
        return {color: Colors.GREEN4};
      }
    },
    [active],
  );

  const activeButton = useCallback(
    (screens: ScreenType): ColorValue => {
      if (screens === active) {
        return Colors.GREEN4;
      } else {
        return Colors.GRAY4;
      }
    },
    [active],
  );

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => onNavigationPress(Ko.Home)}>
          <FastImage
            tintColor={activeButton(Ko.Home)}
            style={styles.icon}
            source={Images.HomeIcon}
            resizeMode={'contain'}
          />
          <Text style={[styles.text, activeText(Ko.Home)]}>{Ko.Home}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => onNavigationPress(Ko.WishJob)}>
          <FastImage
            tintColor={activeButton(Ko.WishJob)}
            style={styles.icon}
            source={Images.WishIcon}
            resizeMode={'contain'}
          />
          <Text style={[styles.text, activeText(Ko.WishJob)]}>
            {Ko.WishJob}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => onNavigationPress(Ko.MyPage)}>
          <FastImage
            tintColor={activeButton(Ko.MyPage)}
            style={styles.icon}
            source={Images.MyPageIcon}
            resizeMode={'contain'}
          />
          <Text style={[styles.text, activeText(Ko.MyPage)]}>{Ko.MyPage}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: Colors.GRAY4,
  },
  navigationContainer: {
    width: '100%',
    height: scaledHeight(56),
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: scaledModerate(24),
    height: scaledModerate(24),
  },
  text: {
    color: Colors.GRAY10,
    marginTop: scaledHeight(3),
    fontSize: scaledModerate(10),
    textAlign: 'center',
    lineHeight: scaledModerate(14),
  },
});

export default TabNavigator;
