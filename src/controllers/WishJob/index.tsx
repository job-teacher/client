import WishJobScreen from '~/screens/WishJob';
import useWishJob from './hooks/useWishJob';

const WishJobController = () => {
  const {onNavigationHandler} = useWishJob();

  return <WishJobScreen onNavigationPress={onNavigationHandler} />;
};

export default WishJobController;
