import React from 'react';
import {PropsWithChildren} from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {useThrottle} from '@hooks/useThrottle';

const ThrottleButton = React.forwardRef<
  View,
  PropsWithChildren<TouchableOpacityProps>
>(({children, onPress, ...props}, ref) => {
  const onThrottlePress = useThrottle(onPress);

  return (
    <TouchableOpacity ref={ref} onPress={onThrottlePress} {...props}>
      {children}
    </TouchableOpacity>
  );
});

ThrottleButton.displayName = 'ThrottleButton';

export default React.memo(ThrottleButton);
