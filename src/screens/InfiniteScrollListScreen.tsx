import React from 'react';
import { StyleSheet, View } from 'react-native';

import { InfiniteScrollList } from 'src/components/molecules';
import { useInfiniteScrollList } from 'src/components/molecules/InfiniteScrollList/InfiniteScrollList.hooks';

export const InfiniteScrollListScreen: React.FC = () => {
  const { data, fetchData } = useInfiniteScrollList();

  return (
    <View style={styles.container}>
      <InfiniteScrollList
        data={data}
        height={58 + 16}
        onEndReached={fetchData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
