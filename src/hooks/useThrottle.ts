import React from 'react';
import {GestureResponderEvent} from 'react-native';

export const useThrottle = (
  onPress: ((event: GestureResponderEvent) => void) | undefined,
) => {
  const THROTTLE_DELAY = 1500;
  const isThrottled = React.useRef(false);

  return (event: GestureResponderEvent) => {
    if (!onPress) return;

    if (isThrottled.current) return;

    isThrottled.current = true;
    onPress(event);

    setTimeout(() => {
      isThrottled.current = false;
    }, THROTTLE_DELAY);
  };
};
