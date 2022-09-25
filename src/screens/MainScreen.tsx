import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PlaygroundButton } from 'src/components/atoms';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Button components</Text>
      <View style={styles.separator} />
      <PlaygroundButton onPress={() => alert('PlaygroundButton pressed')}>
        <Text>PlayGroundButton</Text>
      </PlaygroundButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
  },
});
