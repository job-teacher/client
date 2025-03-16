import {StyleSheet, View} from 'react-native';
import TabNavigator, {ScreenType} from '~/components/navigators/TabNavigator';
import {Ko} from '~/constants/ko';

interface MyPageProps {
  onNavigationPress: (type: ScreenType) => void;
}

const MyPageScreen = ({onNavigationPress}: MyPageProps) => {
  return (
    <View style={styles.container}>
      <TabNavigator active={Ko.MyPage} onNavigationPress={onNavigationPress} />
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
