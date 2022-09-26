import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import { IDisappearingListItem } from './DisappearingListItem.types';
import { useDisappearingListItem } from './DisappearingListItem.hooks';

const MARGIN_BOTTOM = 16;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const DisappearingListItem: React.FC<IDisappearingListItem> = ({
  animationSharedValue,
  height,
  index,
  item,
  listHeight,
}) => {
  const { animatedStyle } = useDisappearingListItem(
    height,
    listHeight,
    index,
    animationSharedValue
  );

  return (
    <AnimatedPressable
      key={index}
      style={[
        styles.container,
        { height: height - MARGIN_BOTTOM },
        { ...animatedStyle },
      ]}
    >
      <Text style={styles.label}>{item.title}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGIN_BOTTOM,
    backgroundColor: '#557FFF',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
  },
  label: {
    color: '#fff',
  },
});
