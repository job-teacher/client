import {StyleSheet, View} from 'react-native';
import TabNavigator, {ScreenType} from '~/components/navigators/TabNavigator';
import {Ko} from '~/constants/ko';

interface HomeScreenProps {
  onNavigationPress: (type: ScreenType) => void;
}

const HomeScreen = ({onNavigationPress}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <TabNavigator active={Ko.Home} onNavigationPress={onNavigationPress} />
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

export default HomeScreen;
