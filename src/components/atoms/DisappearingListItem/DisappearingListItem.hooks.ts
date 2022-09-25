import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

export const useDisappearingListItem = (
  height: number,
  listHeight: number,
  index: number,
  progress: SharedValue<number>
) => {
  const translateY = useDerivedValue(
    () =>
      progress.value +
      interpolate(
        progress.value,
        [-height, 0, 0.00001 + index * height],
        [height, 0, -index * height],
        {
          extrapolateRight: Extrapolate.CLAMP,
        }
      )
  );
  const position = useDerivedValue(() => index * height - progress.value);

  // Aux consts to determine the state of the item
  const hasDisappeared = -height * 2;
  const isDisappearing = -height;
  const isTop = 0;
  const isBottom = listHeight - height;
  const isAppearing = listHeight;

  const scale = useDerivedValue(() =>
    interpolate(
      position.value,
      [hasDisappeared, isDisappearing, isTop, isBottom, isAppearing],
      [0, 0.5, 1, 1, 0.5],
      Extrapolate.CLAMP
    )
  );
  const opacity = useDerivedValue(() =>
    interpolate(
      position.value,
      [hasDisappeared, isDisappearing, isTop, isBottom, isAppearing],
      [0, 0.5, 1, 1, 0.5],
      Extrapolate.CLAMP
    )
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateY: translateY.value,
      },
      {
        scale: scale.value,
      },
    ],
  }));

  return { animatedStyle };
};
