import HomeScreen from '@screens/Home';
import useHome from './hooks/useHome';

const HomeController = () => {
  const {onNavigationHandler} = useHome();

  return <HomeScreen onNavigationPress={onNavigationHandler} />;
};

export default HomeController;
