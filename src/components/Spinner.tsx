import { Animated, Easing } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import twColors from 'tailwindcss/colors';
import { useRef } from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
  duration?: number;
}

const defaultProps = {
  size: 24,
  color: twColors.gray[100],
  duration: 1,
};

export function Spinner({ size, color, duration }: SpinnerProps = { ...defaultProps }) {
  const degValue = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(degValue, {
      toValue: 360,
      useNativeDriver: true,
      duration: (duration as number) * 1000 || 1000,
      easing: Easing.linear,
    }),
    {
      iterations: -1,
      resetBeforeIteration: true,
    },
  ).start();

  const rotate = useRef(
    degValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    }),
  ).current;

  return (
    <Animated.View className="w-max h-max" style={{ transform: [{ rotate }] }}>
      <EvilIcons name="spinner-3" size={size || 24} color={color || twColors.gray[100]} />
    </Animated.View>
  );
}
