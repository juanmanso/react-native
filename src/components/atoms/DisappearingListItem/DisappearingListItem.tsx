import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { IDisappearingListItem } from './DisappearingListItem.types';

const MARGIN_BOTTOM = 16;

export const DisappearingListItem: React.FC<IDisappearingListItem> = ({
  height,
  index,
  item,
}) => {
  return (
    <Pressable
      key={index}
      style={[
        styles.container,
        { height: height - MARGIN_BOTTOM, marginBottom: MARGIN_BOTTOM },
      ]}
    >
      <Text>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});
