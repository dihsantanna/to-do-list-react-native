import { useRef } from 'react';
import { View, Text, ViewProps, Animated, Easing } from 'react-native';
import twColors from 'tailwindcss/colors';

import { CheckSvg } from './CheckSvg';

const AnimatedCheckSvg = Animated.createAnimatedComponent(CheckSvg);

export function TodoLogo(
  props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<View> & Readonly<ViewProps>,
) {
  const animateValue = useRef(new Animated.Value(0)).current;

  Animated.timing(animateValue, {
    delay: 500,
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
    easing: Easing.inOut(Easing.ease),
  }).start();

  const fillColor = useRef(
    animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [twColors.gray[400], twColors.green[400]],
    }),
  ).current;

  return (
    <View className="flex-row items-center justify-center w-80 mx-auto" {...props}>
      <Animated.View>
        <AnimatedCheckSvg width={35} height={35} fill={fillColor} stroke={twColors.gray[100]} />
      </Animated.View>
      <Text className="text-gray-100 font-semibold font-[monospace] text-2xl ml-2">to do list</Text>
    </View>
  );
}
