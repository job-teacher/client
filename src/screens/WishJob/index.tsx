import {StyleSheet, Text, View} from 'react-native';
import TabNavigator, {ScreenType} from '~/components/navigators/TabNavigator';
import {Ko} from '~/constants/ko';

interface MyJobProps {
  onNavigationPress: (type: ScreenType) => void;
}

const WishJobScreen = ({onNavigationPress}: MyJobProps) => {
  return (
    <View style={styles.container}>
      <Text>{'위시리스트'}</Text>
      <TabNavigator active={Ko.WishJob} onNavigationPress={onNavigationPress} />
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

export default WishJobScreen;
