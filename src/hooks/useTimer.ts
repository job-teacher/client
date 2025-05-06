import {useState} from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState<number>(0);
  let timerId = 0;

  const timerDown = (endTime: Date) => {
    const now = Date.now();
    const end = endTime.getTime();
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      setTimer(0);
      cancelAnimationFrame(timerId);
    } else {
      setTimer(Math.floor(timeLeft / 1000));
    }

    timerId = requestAnimationFrame(() => {
      timerDown(endTime);
    });
  };

  const onTimer = (time: number) => {
    timerDown(new Date(Date.now() + time * 1000));
  };

  const stopTimer = () => {
    cancelAnimationFrame(timerId);
  };

  return {timer, onTimer, stopTimer};
};
