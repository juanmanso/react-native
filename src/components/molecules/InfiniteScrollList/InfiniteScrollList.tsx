import React from 'react';
import {FlatList, Pressable, StyleSheet, Text} from 'react-native';
import {IInfiniteScrollListProps, IItem} from './InfiniteScrollList.types';

export const InfiniteScrollList: React.FC<IInfiniteScrollListProps<IItem>> = ({
  data,
  height,
  onEndReached,
}) => {
  const renderItem = ({item, index}: {item: IItem; index: number}) => {
    return (
      <Pressable key={index}>
        <Text>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => `${index}`}
      getItemLayout={(_, index) => ({
        length: height,
        offset: height * index,
        index,
      })}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
