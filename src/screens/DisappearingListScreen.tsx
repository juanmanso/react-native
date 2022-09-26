import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DisappearingList } from 'src/components/molecules';

const DATA = [...Array(9).keys()].map(item => ({
  title: `item number ${item}`,
}));

export const DisappearingListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <DisappearingList data={DATA} height={58 + 16} listHeight={625} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
