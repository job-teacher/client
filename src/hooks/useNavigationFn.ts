import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '@navigations/RootStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useNavigationFn = <
  routeName extends keyof RootStackParams = never,
>() => {
  return useNavigation<NativeStackNavigationProp<RootStackParams, routeName>>();
};
