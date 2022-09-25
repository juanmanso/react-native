import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PlaygroundButton } from 'src/components/atoms';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
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
});
