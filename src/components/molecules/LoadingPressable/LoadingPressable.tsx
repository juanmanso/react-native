import React, { useCallback } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { LoadingGradient } from 'src/components/atoms';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const STABLE_BEAT_VALUE = 1;
const MAX_BEAT_VALUE = 1.3;
const ANIMATION_DURATION = 1200; //ms
const ANIMATION_DURATION_WITHOUT_REVERSE = ANIMATION_DURATION * 2; //ms

interface ILoadingPressable extends PressableProps {
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

export const LoadingPressable: React.FC<ILoadingPressable> = ({
  onPress,
  style,
  children,
  ...props
}) => {
  const progress = useSharedValue(0);
  const beat = useDerivedValue(() =>
    interpolate(progress.value, [0, 1], [STABLE_BEAT_VALUE, MAX_BEAT_VALUE])
  );
  const progressWithoutReverse = useSharedValue(0);

  // function to be called when the animation has to be stopped
  const endAnimation = useCallback(() => {
    // since the press could be called in the middle of the animation repeat (eg: could be 0.5 or 0.3 or anything between 0 & 1),
    // the animation will be cancelled first.
    cancelAnimation(progress);

    // no matter where the value is, will return to original value of 0
    progress.value = withTiming(0, { duration: ANIMATION_DURATION });
    progressWithoutReverse.value = 0;
  }, [progress, progressWithoutReverse]);

  // when the user press only once, this will be triggered.
  const pressableOnPress = React.useCallback(() => {
    progress.value = withSequence(
      withTiming(1, { duration: ANIMATION_DURATION }),
      withTiming(0, { duration: ANIMATION_DURATION })
    );
    progressWithoutReverse.value = withSequence(
      withTiming(1, { duration: ANIMATION_DURATION_WITHOUT_REVERSE }),
      withTiming(0, { duration: ANIMATION_DURATION_WITHOUT_REVERSE })
    );
  }, [progress, progressWithoutReverse]);

  // when the user doesn't release the press after delayLongPress time (500 default),
  // this will be triggered
  const pressableOnLongPress = React.useCallback(() => {
    // heart scale will go from original value (0) to (1) and will reverse back (true).
    // and since the withRepeat's number of times is -1, this will repeat indefinitely.
    progress.value = withRepeat(
      withTiming(1, { duration: ANIMATION_DURATION }),
      -1,
      true
    );
    // handle the no-reverse repetition separately
    progressWithoutReverse.value = withRepeat(
      withTiming(1, { duration: ANIMATION_DURATION_WITHOUT_REVERSE }),
      -1
    );
  }, [progress, progressWithoutReverse]);

  // if the user cancels the touch (by swiping or scrolling), this will be triggered
  const pressableOnCancel = React.useCallback(() => {
    endAnimation();
  }, [endAnimation]);

  // after either a successful long or single press, this will be triggered
  const pressableOnPressOut = React.useCallback(() => {
    endAnimation();

    onPress();
  }, [endAnimation, onPress]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: beat.value }],
    }),
    []
  );

  return (
    <AnimatedPressable
      {...props}
      style={[styles.container, style, { ...animatedStyle }]}
      onPress={pressableOnPress}
      onLongPress={pressableOnLongPress}
      onTouchCancel={pressableOnCancel}
      onTouchEnd={pressableOnPressOut}
    >
      <LoadingGradient progress={progressWithoutReverse} />
      {children}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#558FFF',
  },
});
