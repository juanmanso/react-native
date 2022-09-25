import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Aurora } from 'src/components/organisms';

export const AuroraScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Aurora />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -80,
  },
});
