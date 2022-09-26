import React, { useCallback } from 'react';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { DisappearingListItem } from 'src/components/atoms';

import { TItem } from 'src/components/atoms/DisappearingListItem/DisappearingListItem.types';

export const useDisappearingList = (height: number, listHeight: number) => {
  // Animation handlers
  const animatedScroll = useSharedValue(0);
  const handleOnScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) =>
      (animatedScroll.value = value),
  });

  // List exports
  const keyExtractor = useCallback((_, index) => index, []);
  const itemLayout = useCallback(
    (_, index) => ({
      height,
      offset: height * index,
      index,
    }),
    []
  );
  const renderItem = ({ item, index }: { item: TItem; index: number }) => {
    return (
      <DisappearingListItem
        height={height}
        item={item}
        index={index}
        listHeight={listHeight}
        animationSharedValue={animatedScroll}
      />
    );
  };
  return { handleOnScroll, itemLayout, keyExtractor, renderItem };
};
