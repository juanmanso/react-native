import React from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

import { IDisappearingList } from './DisappearingList.types';
import { useDisappearingList } from './DisappearingList.hooks';

const SCROLL_EVENT_THROTTLE = 16;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const DisappearingList: React.FC<IDisappearingList> = ({
  data,
  height,
  listHeight,
}) => {
  const { handleOnScroll, itemLayout, keyExtractor, renderItem } =
    useDisappearingList(height, listHeight);

  return (
    <AnimatedFlatList
      data={data}
      getItemLayout={itemLayout}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onScroll={handleOnScroll}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={SCROLL_EVENT_THROTTLE}
    />
  );
};
