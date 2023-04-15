import React from 'react';
import {StyleSheet, View} from 'react-native';

import {InfiniteScrollList} from 'src/components/molecules';

const DATA = [...Array(9).keys()].map(item => ({title: `item number ${item}`}));

export const InfiniteScrollListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <InfiniteScrollList
        data={DATA}
        height={58 + 16}
        onEndReached={() => null}
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
